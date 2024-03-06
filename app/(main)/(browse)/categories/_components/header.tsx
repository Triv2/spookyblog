import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import ImageContainer from "@/components/image-container";

interface HeaderProps {
  title: string;
  description: string;
  image: {
    alt: string;
    asset?: any;
  };
}
const headingFont = localFont({
  src: "../../../../../public/fonts/cevicheOne.woff2",
});

const Header = ({ title, description, image }: HeaderProps) => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center w-full h-full px-10 py-4 pl-10 pt-[5rem] gap-2 bg-slate-900/80">
      {image && (
        <ImageContainer
          image={image}
          alt={image.alt}
          width={500}
          height={500}
          imageClassName="rounded-md"
          classesWrapper="h-[10rem] w-[10rem] aspect-square rounded-md"
        />
      )}
      <div className="flex justify-center  flex-col gap-2 md:w-[40%] p-2">
        <h1
          className={cn(
            "text-3xl md:text-6xl tracking-widest text-center text-emerald-400 sm:text-start font-bold",
            headingFont.className
          )}
        >
          {title}
        </h1>
        <p className="text-lg text-purple-400 pl-2">{description}</p>
      </div>
    </div>
  );
};
export default Header;
