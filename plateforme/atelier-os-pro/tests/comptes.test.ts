import { beforeAll, describe, expect, it } from "vitest";
import type { Base } from "@/db";
import { hacherMotDePasse, verifierMotDePasse } from "@/lib/crypto";
import { signerSession, lireSession } from "@/lib/session";
import {
  accepterInvitation, annulerInvitation, changerMotDePasse, connexion, consulterInvitation, contexteDepuisJeton,
  contexteDepuisSession, creerInvitation, creerJeton, listerJetons, modifierMembre, revoquerJeton,
} from "@/lib/services/comptes";
import { motsDePasseSeed, EMAILS } from "@/db/seed";
import { baseDeTest, ctx, IDS } from "./aide";

let db: Base;
beforeAll(async () => {
  db = await baseDeTest();
});
const karim = () => ctx(db, IDS.dirigeant, "dirigeant");

describe("mots de passe", () => {
  it("hash scrypt salé, vérification", async () => {
    const h = await hacherMotDePasse("correct horse battery");
    expect(h).toMatch(/^scrypt\$/);
    expect(h).not.toBe(await hacherMotDePasse("correct horse battery"));
    expect(await verifierMotDePasse("correct horse battery", h)).toBe(true);
    expect(await verifierMotDePasse("mauvais", h)).toBe(false);
  });
});

describe("connexion et session", () => {
  it("accepte le bon mot de passe, refuse le mauvais", async () => {
    const ok = await connexion(db, EMAILS.dirigeant, motsDePasseSeed().demo);
    expect(ok?.utilisateur.id).toBe(IDS.dirigeant);
    expect(ok?.organisations.map((o) => o.id)).toEqual([IDS.orgDemo]);
    expect(await connexion(db, EMAILS.dirigeant, "faux")).toBeNull();
    expect(await connexion(db, "inconnu@x.fr", "faux")).toBeNull();
  });
  it("l'admin plateforme voit toutes les organisations", async () => {
    const ok = await connexion(db, EMAILS.admin, motsDePasseSeed().admin!);
    expect(ok?.organisations.length).toBe(2);
  });
  it("cookie signé : falsification détectée", async () => {
    const v = await signerSession({ u: IDS.julie, o: IDS.orgDemo, v: 1 });
    expect((await lireSession(v))?.u).toBe(IDS.julie);
    const [charge, sig] = v.split(".");
    const fausse = Buffer.from(JSON.stringify({ u: IDS.dirigeant, o: IDS.orgDemo, v: 1, exp: 9999999999 })).toString("base64url");
    expect(await lireSession(`${fausse}.${sig}`)).toBeNull();
    expect(await lireSession(`${charge}.x${sig.slice(1)}`)).toBeNull();
  });
  it("changer de mot de passe invalide les sessions existantes", async () => {
    const k = ctx(db, IDS.thomas, "charge_affaires");
    expect(await contexteDepuisSession(db, { u: IDS.thomas, o: IDS.orgDemo, v: 1 })).not.toBeNull();
    await changerMotDePasse(k, motsDePasseSeed().demo, "un-nouveau-mot-de-passe");
    expect(await contexteDepuisSession(db, { u: IDS.thomas, o: IDS.orgDemo, v: 1 })).toBeNull();
    expect(await contexteDepuisSession(db, { u: IDS.thomas, o: IDS.orgDemo, v: 2 })).not.toBeNull();
  });
  it("un membre désactivé perd l'accès", async () => {
    await modifierMembre(karim(), "mbr_sophie_demo00000000", { actif: false });
    expect(await contexteDepuisSession(db, { u: IDS.adv, o: IDS.orgDemo, v: 2 })).toBeNull();
    expect(await connexion(db, EMAILS.adv, motsDePasseSeed().demo)).toBeNull();
    await modifierMembre(karim(), "mbr_sophie_demo00000000", { actif: true });
  });
});

describe("invitations", () => {
  it("parcours complet : lien, acceptation, connexion, lien à usage unique", async () => {
    const inv = await creerInvitation(karim(), { email: "Nadia@Plomberie-Demo.fr", role: "charge_affaires" }, "https://exemple.fr");
    const jeton = inv.lien.split("/invitation/")[1];
    expect(inv.lien.startsWith("https://exemple.fr/invitation/")).toBe(true);
    expect(JSON.stringify(inv)).not.toContain("jetonHash");
    const vue = await consulterInvitation(db, jeton);
    expect(vue).toMatchObject({ email: "nadia@plomberie-demo.fr", organisation: "Plomberie Démo Paris 11e", compteExistant: false });
    await expect(accepterInvitation(db, jeton, { nom: "Nadia", motDePasse: "court" })).rejects.toMatchObject({ statut: 422 });
    const r = await accepterInvitation(db, jeton, { nom: "Nadia Cherif", motDePasse: "mot-de-passe-solide" });
    expect(r.organisationId).toBe(IDS.orgDemo);
    expect((await connexion(db, "nadia@plomberie-demo.fr", "mot-de-passe-solide"))?.utilisateur.nom).toBe("Nadia Cherif");
    expect(await consulterInvitation(db, jeton)).toBeNull();
    await expect(creerInvitation(karim(), { email: "nadia@plomberie-demo.fr", role: "adv" })).rejects.toMatchObject({ statut: 409 });
  });
  it("une invitation annulée n'est plus valable", async () => {
    const inv = await creerInvitation(karim(), { email: "annule@x.fr", role: "adv" });
    await annulerInvitation(karim(), inv.id);
    expect(await consulterInvitation(db, inv.lien.split("/invitation/")[1])).toBeNull();
  });
});

describe("jetons API", () => {
  it("hashé en base, préfixe visible, révocable", async () => {
    const j = await creerJeton(karim(), { nom: "Zapier", portees: ["*:lecture"] });
    expect(j.secret.startsWith(j.prefixe + "_")).toBe(true);
    const liste = await listerJetons(karim());
    expect(JSON.stringify(liste)).not.toContain(j.secret);
    expect(JSON.stringify(liste)).not.toContain('"hash"');
    const k = await contexteDepuisJeton(db, j.secret);
    expect(k).toMatchObject({ organisationId: IDS.orgDemo, utilisateurId: IDS.dirigeant, origine: "api", portees: ["*:lecture"] });
    expect(await contexteDepuisJeton(db, j.secret.slice(0, -1) + (j.secret.endsWith("a") ? "b" : "a"))).toBeNull();
    await revoquerJeton(karim(), j.id);
    expect(await contexteDepuisJeton(db, j.secret)).toBeNull();
  });
  it("refuse une portée inconnue", async () => {
    await expect(creerJeton(karim(), { nom: "x", portees: ["factures:ecriture"] })).rejects.toMatchObject({ statut: 422 });
  });
});
