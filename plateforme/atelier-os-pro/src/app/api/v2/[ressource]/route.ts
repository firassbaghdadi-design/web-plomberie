import { GET_collection, POST_collection } from "@/lib/api/gestionnaires";

export const dynamic = "force-dynamic";
type P = { params: { ressource: string } };

export const GET = (req: Request, { params }: P) => GET_collection(req, params.ressource);
export const POST = (req: Request, { params }: P) => POST_collection(req, params.ressource);
