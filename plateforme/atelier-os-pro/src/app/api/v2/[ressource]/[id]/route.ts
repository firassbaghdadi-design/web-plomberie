import { DELETE_element, GET_element, PATCH_element } from "@/lib/api/gestionnaires";

export const dynamic = "force-dynamic";
type P = { params: { ressource: string; id: string } };

export const GET = (req: Request, { params }: P) => GET_element(req, params.ressource, params.id);
export const PATCH = (req: Request, { params }: P) => PATCH_element(req, params.ressource, params.id);
export const DELETE = (req: Request, { params }: P) => DELETE_element(req, params.ressource, params.id);
