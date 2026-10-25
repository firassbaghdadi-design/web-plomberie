import Image from "next/image";
import { photoAlt, photoSrc, type PhotoId } from "@/lib/photos";

type Props = { id: PhotoId; sizes: string; alt?: string; className?: string; priority?: boolean };

/** Photo libre de droits (Pexels), provisoire : elles seront remplacées par les photos de l'entreprise. */
export function Photo({ id, sizes, alt, className = "", priority = false }: Props) {
  const src = photoSrc(id);
  if (!src) return <div role="img" aria-label={alt ?? photoAlt(id)} className={`photo-missing absolute inset-0 ${className}`} />;
  return <Image src={src} alt={alt ?? photoAlt(id)} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
}

/** Logo d'origine de l'entreprise : le monogramme SP et le texte, tels que fournis. */
export function LogoSP({ className = "h-12 w-auto" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/brand/somsou-pons-sp.png" alt="" width={209} height={184} className={className} />;
}
export function LogoText({ className = "h-7 w-auto" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/brand/somsou-pons-texte.png" alt="Somsou-Pons, professionnel du bâtiment" width={703} height={69} className={className} />;
}
