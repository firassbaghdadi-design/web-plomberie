import Image from "next/image";
import { photoSrc, remoteSrc, type PhotoId } from "@/lib/photos";
import { RemoteImg } from "./RemoteImg";

type Props = { id: PhotoId; alt: string; sizes: string; className?: string; priority?: boolean };

/** Photo (ancien site ou Wikimedia Commons) : copie locale (aspirée au build) si elle existe, sinon l'URL d'origine, masquée en cas d'échec. */
export function Photo({ id, alt, sizes, className = "", priority = false }: Props) {
  const local = photoSrc(id);
  if (local) {
    return <Image src={local} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
  }
  return <RemoteImg src={remoteSrc(id)} alt={alt} priority={priority} className={className} />;
}

/** Cadre à proportion fixe (évite tout décalage de mise en page) contenant une photo. */
export function Frame({ id, alt, ratio = "4 / 3", sizes, priority = false, className = "" }: { id: PhotoId; alt: string; ratio?: string; sizes: string; priority?: boolean; className?: string }) {
  return (
    <div className={`frame ${className}`} style={{ aspectRatio: ratio }}>
      <Photo id={id} alt={alt} sizes={sizes} priority={priority} />
    </div>
  );
}

/** Photo et sa petite légende (le paramètre `rotate` des anciennes maquettes est ignoré : les photos restent droites). */
export function Polaroid({ id, alt, caption, ratio = "4 / 3", sizes, priority = false, className = "" }: { id: PhotoId; alt: string; caption?: string; ratio?: string; sizes: string; rotate?: number; priority?: boolean; className?: string }) {
  return (
    <figure className={`polaroid ${className}`}>
      <Frame id={id} alt={alt} ratio={ratio} sizes={sizes} priority={priority} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function Logo({ id, alt, className = "h-10 w-auto", width = 200, height = 63 }: { id: PhotoId; alt: string; className?: string; width?: number; height?: number }) {
  const src = photoSrc(id) ?? remoteSrc(id);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} decoding="async" referrerPolicy="no-referrer" className={className} />
  );
}
