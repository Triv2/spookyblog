"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Image as SanityImage } from "sanity";
import ImageContainer from "../image-container";

interface SubCategoryArticleProps {
  title?: string;
  description?: string;
  author: any;
  image: SanityImage;
  date: string;
}
const headingFont = localFont({
  src: "../../public/fonts/flavors.woff2",
});

const SubCategoryArticle = ({
  title,
  description,
  author,
  image,
  date,
}:SubCategoryArticleProps) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const onClick = () => {
    router.push("/articles/test");
  };
  return (
    <section
      onClick={onClick}
      className="p-2 hover:bg-slate-700/70 rounded-xl z-10 cursor-pointer"
    >
      <p
        className={cn(
          "z-40 text-emerald-400 tracking-widest text-lg font-bold",
          headingFont.className
        )}
      >
        {title}
      </p>
      <div className="flex items-center justify-evenly gap-2 z-40 sm:px-1">
      {image && (
            <ImageContainer image={image} alt="cat" width={25} height={25} imageClassName="rounded-md" classesWrapper="max-h-[5rem] max-w-[5rem] rounded-md" />
          )}
        <div className="flex flex-col items-center justify-start py-1 px-2 gap-1 ">
          <p className="text-purple-300/80 pl-1 text-sm line-clamp-4">
            {description}
          </p>
          <div className="flex items-start justify-between md:flex-row flex-col text-purple-200/60  w-full">
            <p className="text-xs pl-2">{new Date().toUTCString()}</p>
            {/* <p className="text-xs hidden md:flex text-emerald-200/70 md:pr-2">
              Comments(0)
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubCategoryArticle;
