import { beforeAll, describe, expect, it } from "vitest";
import { base } from "@/db";
import { IDS } from "@/db/seed";
import { creerJeton } from "@/lib/services/comptes";
import * as h from "@/lib/api/gestionnaires";
import { genererOpenApi } from "@/lib/api/openapi";
import { ctx } from "./aide";

process.env.PGLITE_DIR = "memory://";
let jeton: string;
let jetonLecture: string;
const U = "http://test.local/api/v2";

const req = (chemin: string, init: RequestInit & { cle?: string; sansAuth?: boolean; jeton?: string } = {}) =>
  new Request(U + chemin, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init.sansAuth ? {} : { authorization: `Bearer ${init.jeton ?? jeton}` }),
      ...(init.cle ? { "idempotency-key": init.cle } : {}),
    },
  });

beforeAll(async () => {
  const db = await base();
  jeton = (await creerJeton(ctx(db, IDS.dirigeant, "dirigeant"), { nom: "Tests", portees: ["*:ecriture"] })).secret;
  jetonLecture = (await creerJeton(ctx(db, IDS.dirigeant, "dirigeant"), { nom: "Lecture", portees: ["*:lecture"] })).secret;
});

describe("API v2", () => {
  it("401 homogène sans authentification", async () => {
    const r = await h.GET_collection(req("/clients", { sansAuth: true }), "clients");
    expect(r.status).toBe(401);
    expect((await r.json()).erreur.code).toBe("non_authentifie");
    const r2 = await h.GET_collection(req("/clients", { jeton: "aos_faux0000_" + "x".repeat(30) }), "clients");
    expect(r2.status).toBe(401);
  });

  it("CRUD complet sur les clients", async () => {
    const c = await h.POST_collection(req("/clients", { method: "POST", body: JSON.stringify({ nom: "Client API", type: "syndic" }) }), "clients");
    expect(c.status).toBe(201);
    const cree = await c.json();
    const g = await h.GET_element(req(`/clients/${cree.id}`), "clients", cree.id);
    expect((await g.json()).nom).toBe("Client API");
    const p = await h.PATCH_element(req(`/clients/${cree.id}`, { method: "PATCH", body: JSON.stringify({ telephone: "01 00 00 00 00" }) }), "clients", cree.id);
    expect((await p.json()).telephone).toBe("01 00 00 00 00");
    const d = await h.DELETE_element(req(`/clients/${cree.id}`, { method: "DELETE" }), "clients", cree.id);
    expect(d.status).toBe(204);
    expect((await h.GET_element(req(`/clients/${cree.id}`), "clients", cree.id)).status).toBe(404);
    const journal = await (await h.GET_collection(req(`/activites?ressourceId=${cree.id}`), "activites")).json();
    expect(journal.donnees.every((a: any) => a.origine === "api" && a.jetonId)).toBe(true);
    expect(journal.donnees).toHaveLength(3);
  });

  it("pagination, filtres, recherche", async () => {
    const p1 = await (await h.GET_collection(req("/clients?limite=3"), "clients")).json();
    expect(p1.donnees).toHaveLength(3);
    expect(p1.curseurSuivant).toBeTruthy();
    const p2 = await (await h.GET_collection(req(`/clients?limite=3&curseur=${p1.curseurSuivant}`), "clients")).json();
    expect(p2.donnees.map((c: any) => c.id)).not.toContain(p1.donnees[0].id);
    const f = await (await h.GET_collection(req("/chantiers?statut=planifie"), "chantiers")).json();
    expect(f.donnees.every((c: any) => c.statut === "planifie")).toBe(true);
    const q = await (await h.GET_collection(req("/clients?q=brasserie"), "clients")).json();
    expect(q.donnees[0].nom).toContain("Brasserie");
    const mauvais = await h.GET_collection(req("/clients?couleur=rouge"), "clients");
    expect(mauvais.status).toBe(422);
    expect((await h.GET_collection(req("/clients?curseur=n'importe-quoi"), "clients")).status).toBe(422);
  });

  it("idempotence des POST", async () => {
    const corps = JSON.stringify({ titre: "Tâche idempotente" });
    const a = await h.POST_collection(req("/taches", { method: "POST", body: corps, cle: "cle-unique-123" }), "taches");
    const b = await h.POST_collection(req("/taches", { method: "POST", body: corps, cle: "cle-unique-123" }), "taches");
    expect(a.status).toBe(201);
    expect(b.status).toBe(201);
    expect(b.headers.get("idempotency-replayed")).toBe("true");
    expect((await a.json()).id).toBe((await b.json()).id);
    const c = await h.POST_collection(req("/taches", { method: "POST", body: JSON.stringify({ titre: "Autre" }), cle: "cle-unique-123" }), "taches");
    expect(c.status).toBe(422);
    expect((await c.json()).erreur.code).toBe("idempotence_conflit");
    const liste = await (await h.GET_collection(req("/taches?q=idempotente"), "taches")).json();
    expect(liste.donnees).toHaveLength(1);
  });

  it("erreurs JSON homogènes", async () => {
    const r = await h.POST_collection(req("/clients", { method: "POST", body: "{pas du json" }), "clients");
    expect(r.status).toBe(400);
    expect((await r.json()).erreur.code).toBe("json_invalide");
    const v = await (await h.POST_collection(req("/clients", { method: "POST", body: JSON.stringify({ type: "martien" }) }), "clients")).json();
    expect(v.erreur.code).toBe("validation");
    expect(Array.isArray(v.erreur.details)).toBe(true);
    expect((await h.GET_collection(req("/inconnue"), "inconnue")).status).toBe(404);
    expect((await h.POST_collection(req("/activites", { method: "POST", body: "{}" }), "activites")).status).toBe(405);
  });

  it("portée lecture seule : 403 en écriture", async () => {
    expect((await h.GET_collection(req("/clients", { jeton: jetonLecture }), "clients")).status).toBe(200);
    const r = await h.POST_collection(req("/clients", { method: "POST", jeton: jetonLecture, body: JSON.stringify({ nom: "x" }) }), "clients");
    expect(r.status).toBe(403);
  });

  it("les secrets ne sortent jamais (sauf à la création du jeton)", async () => {
    const j = await (await h.GET_collection(req("/jetons"), "jetons")).json();
    expect(JSON.stringify(j)).not.toMatch(/"hash"|"secret"/);
    const m = await (await h.GET_collection(req("/membres"), "membres")).json();
    expect(JSON.stringify(m)).not.toContain("motDePasseHash");
    const moi = await (await h.GET_moi(req("/moi"))).json();
    expect(moi).toMatchObject({ role: "dirigeant", authentification: { type: "jeton" } });
  });

  it("OpenAPI 3.1 décrit toutes les ressources", () => {
    const d: any = genererOpenApi();
    expect(d.openapi).toBe("3.1.0");
    for (const p of ["/clients", "/clients/{id}", "/contacts", "/sites", "/chantiers", "/notes", "/taches", "/pieces-jointes", "/etiquettes", "/activites", "/membres", "/invitations", "/jetons", "/moi", "/organisation", "/etiquetages"]) {
      expect(d.paths[p], p).toBeTruthy();
    }
    expect(d.components.schemas.ClientCreation.properties.nom).toBeTruthy();
    expect(d.components.schemas.JetonAPI.properties.hash).toBeUndefined();
    expect(JSON.stringify(d)).not.toContain("motDePasseHash");
  });
});
