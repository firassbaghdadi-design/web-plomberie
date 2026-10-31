import { genererOpenApi } from "@/lib/api/openapi";

export const dynamic = "force-static";
export const GET = () => Response.json(genererOpenApi(), { headers: { "Access-Control-Allow-Origin": "*" } });
