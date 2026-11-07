import Link from "next/link";
import { genererOpenApi } from "@/lib/api/openapi";

export const metadata = { title: "Documentation API" };

const COULEUR: Record<string, string> = { get: "#30A46C", post: "#3E8EF7", patch: "#F5A524", delete: "#E5484D" };

function resoudre(spec: any, s: any): any {
  if (s?.$ref) return spec.components.schemas[s.$ref.split("/").pop()];
  return s;
}

function Champs({ spec, schema }: { spec: any; schema: any }) {
  const s = resoudre(spec, schema);
  if (!s?.properties) return null;
  const requis = new Set<string>(s.required ?? []);
  return (
    <table className="mt-2 w-full text-left text-[13px]">
      <tbody className="divide-y divide-trait/70">
        {Object.entries<any>(s.properties).map(([k, v]) => {
          const type = v.enum ? v.enum.filter((x: unknown) => x !== null).join(" | ") : Array.isArray(v.type) ? v.type.join(" | ") : v.type ?? (v.anyOf ? v.anyOf.map((a: any) => a.type).join(" | ") : "objet");
          return (
            <tr key={k} className="align-top">
              <td className="whitespace-nowrap py-1.5 pr-3 font-mono text-[12.5px]">
                {k}
                {requis.has(k) && <span className="text-terre">*</span>}
              </td>
              <td className="py-1.5 pr-3 font-mono text-[12px] text-doux">{type}{v.format ? ` (${v.format})` : ""}</td>
              <td className="py-1.5 text-doux">{v.description ?? ""}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function Docs() {
  const spec: any = genererOpenApi();
  const parTag: Record<string, { methode: string; chemin: string; op: any }[]> = {};
  for (const [chemin, ops] of Object.entries<any>(spec.paths))
    for (const [methode, op] of Object.entries<any>(ops)) (parTag[op.tags?.[0] ?? "autres"] ??= []).push({ methode, chemin, op });

  return (
    <main className="mx-auto max-w-[920px] px-4 pb-24 pt-8 sm:px-6 lg:pt-14">
      <Link href="/" className="btn-texte mb-4">
        ← Atelier OS
      </Link>
      <p className="sur-titre mb-1.5">API v2 · OpenAPI {spec.openapi}</p>
      <h1 className="titre-page mb-5">Documentation de l&apos;API</h1>
      <div className="carte space-y-3 p-6 text-[14.5px] leading-relaxed">
        {spec.info.description.split("\n\n").map((p: string) => (
          <p key={p} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`(.+?)`/g, '<code class="rounded bg-creux px-1 py-0.5 font-mono text-[13px]">$1</code>') }} />
        ))}
        <p>
          Base : <code className="rounded bg-creux px-1 py-0.5 font-mono text-[13px]">/api/v2</code> · Spécification brute :{" "}
          <a href="/api/v2/openapi.json" className="text-terre">
            openapi.json
          </a>
        </p>
        <pre className="overflow-x-auto rounded-2xl bg-creux p-4 font-mono text-[12.5px] leading-relaxed">{`curl https://<votre-domaine>/api/v2/clients?q=dupont \\
  -H "Authorization: Bearer aos_xxxxxxxx_…"

curl -X POST https://<votre-domaine>/api/v2/taches \\
  -H "Authorization: Bearer aos_xxxxxxxx_…" \\
  -H "Idempotency-Key: 7f1c…" -H "Content-Type: application/json" \\
  -d '{"titre":"Rappeler Mme Dupont","echeance":"2026-11-02"}'`}</pre>
      </div>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Ressources">
        {spec.tags.map((t: any) => (
          <a key={t.name} href={`#${t.name}`} className="puce">
            {t.name}
          </a>
        ))}
      </nav>

      {spec.tags.map((t: any) => (
        <section key={t.name} id={t.name} className="scroll-mt-6">
          <h2 className="mb-1 mt-12 text-[22px] font-semibold tracking-tight">{t.name}</h2>
          <p className="mb-4 text-doux">{t.description}</p>
          <div className="space-y-3">
            {(parTag[t.name] ?? []).map(({ methode, chemin, op }) => (
              <details key={methode + chemin} className="carte group overflow-hidden">
                <summary className="flex cursor-pointer items-center gap-3 px-5 py-3.5">
                  <span className="w-[58px] shrink-0 rounded-md py-0.5 text-center font-mono text-[11.5px] font-bold uppercase text-white" style={{ backgroundColor: COULEUR[methode] }}>
                    {methode}
                  </span>
                  <code className="min-w-0 flex-1 truncate font-mono text-[13.5px]">{chemin}</code>
                  <span className="hidden text-[13px] text-doux sm:block">{op.summary}</span>
                </summary>
                <div className="border-t border-trait/70 px-5 py-4 text-[14px]">
                  <p className="text-doux sm:hidden">{op.summary}</p>
                  {op.description && <p className="text-doux">{op.description}</p>}
                  {op.parameters?.length > 0 && (
                    <>
                      <p className="mt-3 font-medium">Paramètres</p>
                      <ul className="mt-1 space-y-0.5 text-[13px] text-doux">
                        {op.parameters.map((p: any) => {
                          const r = p.$ref ? spec.components.parameters[p.$ref.split("/").pop()] : p;
                          return (
                            <li key={r.name}>
                              <code className="font-mono text-encre">{r.name}</code> ({r.in}) {r.description ? `— ${r.description}` : ""}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                  {op.requestBody && (
                    <>
                      <p className="mt-3 font-medium">Corps JSON</p>
                      <Champs spec={spec} schema={op.requestBody.content["application/json"].schema} />
                    </>
                  )}
                  <p className="mt-3 font-medium">Réponses</p>
                  <p className="text-[13px] text-doux">
                    {Object.entries<any>(op.responses)
                      .map(([c, r]) => `${c} ${r.description}`)
                      .join(" · ")}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
