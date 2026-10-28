import { BeforeAfter } from "@/components/BeforeAfter";
import { Img } from "@/components/Img";
import { imgSrc, montageOf, photoAlt } from "@/lib/photos";

/** Une réalisation de l'entreprise : comparateur avant / après si le montage est connu, sinon la photo telle quelle. */
export function Realisation({ id }: { id: string }) {
  const src = imgSrc(id);
  const m = montageOf(id);
  if (src && m) return <BeforeAfter src={src} alt={photoAlt(id)} {...m} />;
  return <div className="max-w-[300px] overflow-hidden rounded-[3px]"><Img id={id} alt={photoAlt(id)} className="aspect-square" /></div>;
}
