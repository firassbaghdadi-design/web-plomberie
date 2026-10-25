/** Génère la documentation OpenAPI 3.1 depuis le registre, les schémas zod et les tables Drizzle. */
import { getTableColumns } from "drizzle-orm";
import type { PgTable } from "drizzle-orm/pg-core";
import { z } from "zod";
import { organisations } from "@/db/schema";
import * as sc from "@/lib/schemas";
import { REGISTRE, type EntreeRegistre } from "./registre";

type Schema = Record<string, any>;

function schemaZod(schema: z.ZodType<any, any>): Schema {
  const j = z.toJSONSchema(schema, { target: "draft-2020-12", io: "input", unrepresentable: "any" }) as Schema;
  delete j.$schema;
  return j;
}

const SENSIBLES = new Set(["hash", "jetonHash", "motDePasseHash"]);

export function schemaTable(table: PgTable, masquer: string[] = [], enPlus: Record<string, object> = {}): Schema {
  const proprietes: Record<string, Schema> = {};
  const requis: string[] = [];
  for (const [cle, col] of Object.entries(getTableColumns(table)) as [string, any][]) {
    if (SENSIBLES.has(cle) || masquer.includes(cle)) continue;
    let t: Schema;
    switch (col.columnType) {
      case "PgTimestamp":
        t = { type: "string", format: "date-time" };
        break;
      case "PgDateString":
        t = { type: "string", format: "date" };
        break;
      case "PgInteger":
        t = { type: "integer" };
        break;
      case "PgBoolean":
        t = { type: "boolean" };
        break;
      case "PgJsonb":
        t = {};
        break;
      case "PgArray":
        t = { type: "array", items: { type: "string" } };
        break;
      case "PgEnumColumn":
        t = { type: "string", enum: col.enumValues };
        break;
      default:
        t = { type: "string" };
    }
    if (!col.notNull) t = Object.keys(t).length ? { ...t, type: [t.type, "null"].filter(Boolean) } : t;
    if (t.enum && !col.notNull) t.enum = [...t.enum, null];
    proprietes[cle] = t;
    requis.push(cle);
  }
  return { type: "object", properties: { ...proprietes, ...enPlus }, required: requis };
}

const nomSchema = (r: EntreeRegistre) =>
  r.singulier
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/(^|\s)(\w)/g, (_m, _e, c: string) => c.toUpperCase())
    .replace(/\s/g, "");

const ref = (n: string) => ({ $ref: `#/components/schemas/${n}` });
const reponseErreur = (description: string) => ({ description, content: { "application/json": { schema: ref("Erreur") } } });
const ERREURS = {
  "401": reponseErreur("Non authentifié"),
  "403": reponseErreur("Droits ou portée insuffisants"),
  "422": reponseErreur("Données invalides"),
};

export function genererOpenApi() {
  const schemas: Record<string, Schema> = {
    Erreur: {
      type: "object",
      required: ["erreur"],
      properties: {
        erreur: {
          type: "object",
          required: ["code", "message"],
          properties: {
            code: { type: "string", examples: ["validation", "introuvable", "interdit", "non_authentifie", "conflit", "idempotence_conflit"] },
            message: { type: "string" },
            details: { type: "array", items: { type: "object", properties: { champ: { type: "string" }, message: { type: "string" } } } },
          },
        },
      },
    },
    Organisation: {},
    OrganisationModification: schemaZod(sc.organisationModification),
    Etiquetage: schemaZod(sc.etiquetageCreation),
  };
  const paths: Record<string, any> = {};
  const tags: { name: string; description: string }[] = [];

  for (const r of REGISTRE) {
    const N = nomSchema(r);
    tags.push({ name: r.nom, description: r.description });
    schemas[N] = schemaTable(r.table, r.masquer, r.enPlus);
    if (r.creation) schemas[`${N}Creation`] = schemaZod(r.creation);
    if (r.modification) schemas[`${N}Modification`] = schemaZod(r.modification);

    const collection: Record<string, any> = {};
    if (r.lister) {
      collection.get = {
        tags: [r.nom],
        operationId: `lister_${r.nom}`,
        summary: `Lister — ${r.nom}`,
        parameters: [
          { $ref: "#/components/parameters/limite" },
          { $ref: "#/components/parameters/curseur" },
          ...(r.recherche ? [{ $ref: "#/components/parameters/q" }, { $ref: "#/components/parameters/majDepuis" }] : []),
          ...(r.filtres ?? []).map((f) => ({ name: f, in: "query", required: false, schema: { type: "string" }, description: `Filtre d'égalité sur ${f}` })),
        ],
        responses: {
          "200": {
            description: "Page de résultats, du plus récent au plus ancien",
            content: {
              "application/json": {
                schema: { type: "object", required: ["donnees", "curseurSuivant"], properties: { donnees: { type: "array", items: ref(N) }, curseurSuivant: { type: ["string", "null"] } } },
              },
            },
          },
          ...ERREURS,
        },
      };
    }
    if (r.creer) {
      collection.post = {
        tags: [r.nom],
        operationId: `creer_${r.nom}`,
        summary: `Créer — ${r.singulier.toLowerCase()}`,
        parameters: [{ $ref: "#/components/parameters/idempotence" }],
        requestBody: { required: true, content: { "application/json": { schema: ref(`${N}Creation`) } } },
        responses: { "201": { description: "Créé", content: { "application/json": { schema: ref(N) } } }, ...ERREURS, "409": reponseErreur("Conflit (doublon)") },
      };
    }
    if (Object.keys(collection).length) paths[`/${r.nom}`] = collection;

    const element: Record<string, any> = {};
    const pid = { name: "id", in: "path", required: true, schema: { type: "string" } };
    if (r.obtenir)
      element.get = { tags: [r.nom], operationId: `obtenir_${r.nom}`, summary: `Lire — ${r.singulier.toLowerCase()}`, parameters: [pid], responses: { "200": { description: "OK", content: { "application/json": { schema: ref(N) } } }, "404": reponseErreur("Introuvable"), ...ERREURS } };
    if (r.modifier)
      element.patch = {
        tags: [r.nom],
        operationId: `modifier_${r.nom}`,
        summary: `Modifier — ${r.singulier.toLowerCase()}`,
        description: "Mise à jour partielle : seuls les champs fournis sont modifiés. `null` efface un champ facultatif.",
        parameters: [pid],
        requestBody: { required: true, content: { "application/json": { schema: ref(`${N}Modification`) } } },
        responses: { "200": { description: "Modifié", content: { "application/json": { schema: ref(N) } } }, "404": reponseErreur("Introuvable"), ...ERREURS },
      };
    if (r.supprimer)
      element.delete = { tags: [r.nom], operationId: `supprimer_${r.nom}`, summary: `${r.libelleSuppression ?? "Supprimer"} — ${r.singulier.toLowerCase()}`, parameters: [pid], responses: { "204": { description: "Fait" }, "404": reponseErreur("Introuvable"), ...ERREURS } };
    if (Object.keys(element).length) paths[`/${r.nom}/{id}`] = element;
  }

  schemas.Organisation = schemaTable(organisations);

  tags.push({ name: "compte", description: "Utilisateur courant et organisation." }, { name: "etiquetages", description: "Poser et retirer des étiquettes." });
  paths["/moi"] = { get: { tags: ["compte"], operationId: "moi", summary: "Qui suis-je ?", description: "Utilisateur, rôle, organisation et type d'authentification (session ou jeton).", responses: { "200": { description: "OK" }, "401": ERREURS["401"] } } };
  paths["/organisation"] = {
    get: { tags: ["compte"], operationId: "obtenir_organisation", summary: "Réglages de l'organisation", responses: { "200": { description: "OK", content: { "application/json": { schema: ref("Organisation") } } }, ...ERREURS } },
    patch: {
      tags: ["compte"],
      operationId: "modifier_organisation",
      summary: "Modifier les réglages (dirigeant)",
      requestBody: { required: true, content: { "application/json": { schema: ref("OrganisationModification") } } },
      responses: { "200": { description: "OK", content: { "application/json": { schema: ref("Organisation") } } }, ...ERREURS },
    },
  };
  paths["/etiquetages"] = {
    get: {
      tags: ["etiquetages"],
      operationId: "lister_etiquetages",
      summary: "Étiquettes d'une ressource",
      parameters: [
        { name: "typeRessource", in: "query", required: true, schema: { type: "string", enum: ["clients", "chantiers"] } },
        { name: "ressourceId", in: "query", required: true, schema: { type: "string" } },
      ],
      responses: { "200": { description: "OK" }, ...ERREURS },
    },
    post: { tags: ["etiquetages"], operationId: "poser_etiquette", summary: "Poser une étiquette", parameters: [{ $ref: "#/components/parameters/idempotence" }], requestBody: { required: true, content: { "application/json": { schema: ref("Etiquetage") } } }, responses: { "201": { description: "Posée" }, ...ERREURS } },
    delete: { tags: ["etiquetages"], operationId: "retirer_etiquette", summary: "Retirer une étiquette", requestBody: { required: true, content: { "application/json": { schema: ref("Etiquetage") } } }, responses: { "204": { description: "Retirée" }, ...ERREURS } },
  };

  return {
    openapi: "3.1.0",
    info: {
      title: "Atelier OS — API v2",
      version: "2.0.0",
      description:
        "API du CRM Atelier OS. Tout ce que fait l'interface passe par les mêmes services que cette API.\n\n" +
        "**Authentification** : `Authorization: Bearer aos_…` (jeton créé dans Réglages → Jetons API, limité par ses portées) ou cookie de session de l'interface.\n\n" +
        "**Pagination** : par curseur. Passez `curseurSuivant` dans `?curseur=` pour la page suivante ; `null` = fin.\n\n" +
        "**Idempotence** : envoyez `Idempotency-Key: <uuid>` sur les POST ; un rejeu identique renvoie la réponse d'origine (en-tête `Idempotency-Replayed: true`) pendant 24 h.\n\n" +
        "**Erreurs** : toujours `{ \"erreur\": { \"code\", \"message\", \"details\"? } }` avec le statut HTTP adapté.\n\n" +
        "**Montants** : en centimes (entiers). **Dates** : ISO 8601.",
    },
    servers: [{ url: "/api/v2" }],
    security: [{ jeton: [] }, { session: [] }],
    tags,
    paths,
    components: {
      securitySchemes: {
        jeton: { type: "http", scheme: "bearer", description: "Jeton API d'organisation (préfixe aos_)." },
        session: { type: "apiKey", in: "cookie", name: "aos_session" },
      },
      parameters: {
        limite: { name: "limite", in: "query", required: false, schema: { type: "integer", minimum: 1, maximum: 100, default: 25 } },
        curseur: { name: "curseur", in: "query", required: false, schema: { type: "string" }, description: "Valeur de curseurSuivant de la page précédente." },
        q: { name: "q", in: "query", required: false, schema: { type: "string" }, description: "Recherche texte (insensible à la casse)." },
        majDepuis: { name: "majDepuis", in: "query", required: false, schema: { type: "string", format: "date-time" }, description: "Seulement les éléments modifiés depuis cette date (synchronisation)." },
        idempotence: { name: "Idempotency-Key", in: "header", required: false, schema: { type: "string", maxLength: 255 } },
      },
      schemas,
    },
  };
}
