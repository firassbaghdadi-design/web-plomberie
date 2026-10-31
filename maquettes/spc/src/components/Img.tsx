import type { Photo } from "@/lib/photos";
import { Decoupe } from "./Decoupe";

type Props = { photo: Photo; className?: string; priority?: boolean; position?: string; duo?: boolean };

/** Image téléchargée au build, en couleurs naturelles (ou en bichromie). Si elle manque, un panneau de zinc prend sa place. */
export function Img({ photo, className = "", priority, position, duo = false }: Props) {
  return <Decoupe photo={photo} shape="none" duo={duo} className={className} priority={priority} position={position} />;
}
