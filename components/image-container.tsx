import Image from "next/image";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";

interface ImageContainerProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
  "data-sanity"?: string;
  imageClassName?: string;
  priority?:boolean;
}

export default function ImageContainer({
  image,
  alt = "Cover image",
  width,
  height,
  size = "80vw",
  classesWrapper,
  imageClassName,
  priority=false,
  ...props
}: ImageContainerProps) {
  const imageUrl = image && urlForImage(image)?.fit("crop").url();

  return (
    <div className={`${classesWrapper}`} data-sanity={props["data-sanity"]}>
      {imageUrl && (
        <Image className={cn("h-full w-full ", imageClassName)} alt={alt} width={width} height={height} sizes={size} src={imageUrl} priority={priority} quality="50"  />
      )}
    </div>
  );
}
