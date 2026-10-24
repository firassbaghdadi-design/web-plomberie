import Image from "next/image";
import { photoAlt, photoSrc, type PhotoId } from "@/lib/photos";

type Props = { id: PhotoId; sizes: string; className?: string; priority?: boolean; alt?: string };

/** Photo libre de droit (Pexels). Si elle n'a pas pu être téléchargée au build, un fond neutre la remplace. */
export function Photo({ id, sizes, className = "", priority = false, alt }: Props) {
  const src = photoSrc(id);
  if (!src) return <div className={`photo-missing absolute inset-0 ${className}`} role="presentation" />;
  return <Image src={src} alt={alt ?? photoAlt(id)} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
}

export function Figure({ id, caption, sizes, ratio = "aspect-[4/5]", tilt, priority = false, className = "" }: { id: PhotoId; caption?: string; sizes: string; ratio?: string; tilt?: string; priority?: boolean; className?: string }) {
  return (
    <figure className={`snap ${className}`} style={tilt ? ({ ["--tilt" as string]: tilt } as React.CSSProperties) : undefined}>
      <div className={`photo ${ratio}`}>
        <Photo id={id} sizes={sizes} priority={priority} />
      </div>
      {caption ? <figcaption className="hand mt-3 px-1 text-center">{caption}</figcaption> : null}
    </figure>
  );
}
