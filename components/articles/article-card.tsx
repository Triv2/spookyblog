import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import localFont from "next/font/local";
import { Article, Profile } from "@prisma/client";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthorAvatar from "../author/author-avatar";
import AuthorAbout from "../author/author-about";
import Highlighter, { HighlighterItem } from "../effects/highlighter";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

interface ArticleCardProps {
  article?:Article;
}
const headingFont=localFont({
  src:"../../public/fonts/flavors.woff2",
});

const ArticleCard = ({
  article,
}:ArticleCardProps) => {

  
  return (
   
    <Card className="bg-slate-900 w-full h-full cursor-none">
      
      <CardHeader>
        
        <CardTitle className={cn("font-bold tracking-wider  text-2xl lg:text-4xl text-emerald-400",headingFont.className,)}>
          Article One Title
          </CardTitle>
          
          
          
         
          <div className="flex sm:flex-row flex-col sm:justify-between md:items-center">
            <div>
          <p className="pl-2 text-purple-400/80">Category {'>'} Subcategory</p>
          <CardDescription className="pl-3 flex flex-col text-purple-300/50">
                {new Date().toUTCString()}
          </CardDescription>
          </div>
          <AuthorAbout/>
          </div>
       
      </CardHeader>
      <CardContent className="text-sm md:text-xl text-white/70 flex md:flex-row flex-col gap-5">
        <div className="md:w-[30%] flex items-center justify-start flex-col">
      <Image  className="rounded-md shadow-md w-auto h-auto"src="/article1.png" alt="articleone" width={250} height={250}/>
      </div>
      <div className="md:w-[65%] text-ellipsis line-clamp-5 overflow-hidden "> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2">
        <Button className="z-10 hover:scale-105 bg-gradient-to-tr from-purple-600/40 to-emerald-900/60" variant="purple" asChild>
        <Link  href="/articles/test">
          Read More <ArrowRight className="h-4 w-4"/>
        </Link>
        </Button>
          <p className=" text-purple-300/50">Comments (0)</p>
        
        
        
      </CardFooter>
    </Card>
    
  );
};
export default ArticleCard;
ArticleCard.Skeleton = function SkeletonArticleCard() {
  return (
    <div className="flex flex-col items-center gap-2 w-full ">
      <Skeleton className="aspect-video bg-gradient-to-bl from-purple-600/40 to-emerald-900/60 h-[300px] px-5 w-full p-2" />
     
    </div>
  );
};