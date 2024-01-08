import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import localFont from "next/font/local";
import { Article as ArticleData, Profile } from "@prisma/client";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import AuthorAbout from "@/components/author/author-about";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RelatedArticles from "@/components/articles/related/related-articles";
import Comments from "@/components/comments/comments";

interface ArticleProps {
  article?: ArticleData;
}
const headingFont = localFont({
  src: "../../../../../../public/fonts/flavors.woff2",
});
const titleFont = localFont({
  src: "../../../../../../public/fonts/cevicheOne.woff2",
});

const Article = ({ article }: ArticleProps) => {
  return (
    <Card className="bg-slate-900 w-full cursor-none ">
      <CardHeader>
        <CardTitle
          className={cn(
            "font-bold tracking-wider  text-2xl lg:text-4xl text-emerald-400",
            headingFont.className
          )}
        >
          Article One Title
        </CardTitle>

        <div className="flex sm:flex-row flex-col sm:justify-between md:items-center gap-1">
          <div>
            <p className="pl-2 text-purple-400/80">
              Category {">"} Subcategory
            </p>
            <CardDescription className="pl-3 flex flex-col text-purple-300/50">
              {new Date().toUTCString()}
            </CardDescription>
          </div>
          <div className="">
            <AuthorAbout />
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm md:text-xl text-purple-100/80 flex  flex-col gap-5">
        <div className=" flex md:flex-row flex-col items-center justify-center gap-5 ">
          <div className=" flex items-center justify-start flex-col md:w-[30%]">
            <Image
              className="rounded-md shadow-md w-auto h-auto"
              src="/article1.png"
              alt="articleone"
              width={350}
              height={350}
            />
          </div>
          <div className="md:w-[65%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

        <div className=" flex items-center justify-center md:flex-row flex-col-reverse gap-5 ">
          <div className="md:w-[65%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className=" flex items-center justify-start flex-col md:w-[30%]">
            <Image
              className="rounded-md shadow-md w-auto h-auto"
              src="/article1.png"
              alt="articleone"
              width={350}
              height={350}
            />
          </div>
        </div>

        <div className=" flex items-center justify-center md:flex-row flex-col gap-5 ">
          <div className=" flex items-center justify-start flex-col md:w-[30%]">
            <Image
              className="rounded-md shadow-md w-auto h-auto"
              src="/article1.png"
              alt="articleone"
              width={350}
              height={350}
            />
          </div>
          <div className="md:w-[65%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between md:flex-row flex-col-reverse items-center gap-4 md:px-2 px-1">
        <div className="sm:p-3 p-1" >
          
          
          <Comments />
        </div>
        
      </CardFooter>
    </Card>
  );
};
export default Article;
