import Image from "next/image";
import { photoSrc, remoteSrc, type PhotoId } from "@/lib/photos";

type Props = { id: PhotoId; alt: string; sizes: string; className?: string; priority?: boolean };

export function Photo({ id, alt, sizes, className = "", priority = false }: Props) {
  const local = photoSrc(id);
  if (local) {
    return <Image src={local} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={remoteSrc(id)}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

export function Logo({ id, alt, className = "h-10 w-auto", width = 200, height = 63 }: { id: PhotoId; alt: string; className?: string; width?: number; height?: number }) {
  const src = photoSrc(id) ?? remoteSrc(id);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} decoding="async" referrerPolicy="no-referrer" className={className} />
  );
}
