import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Article, Profile } from "@prisma/client";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthorAvatar from "../author/author-avatar";
import AuthorAbout from "../author/author-about";
import Highlighter, { HighlighterItem } from "../effects/highlighter";

interface ArticleCardProps {
  article?:Article;
}

const ArticleCard = ({
  article,
}:ArticleCardProps) => {
  return (
    <Highlighter>
      <HighlighterItem>
    <Card className="bg-slate-900/80 w-full z-30 cursor-none">
      
      <CardHeader>
        
        <CardTitle className="font-bold  text-2xl lg:text-4xl text-white">
          Article One Title
          </CardTitle>
          
          
          
         
          <div className="flex sm:flex-row flex-col sm:justify-between md:items-center">
            <div>
          <p className="pl-2">Category {'>'} Subcategory</p>
          <CardDescription className="pl-3 flex flex-col">
                {new Date().toUTCString()}
          </CardDescription>
          </div>
          <AuthorAbout/>
          </div>
       
      </CardHeader>
      <CardContent className="text-sm md:text-xl text-white/70 flex md:flex-row flex-col gap-5">
        <div className="md:w-[30%] flex items-center justify-start flex-col">
      <Image  className="rounded-md shadow-md w-auto h-auto"src="/article1.png" alt="articleone" width={300} height={300}/>
      </div>
      <div className="md:w-[70%]"> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2">
        
        <Link className="z-30 text-blue-600 hover:scale-105 hover:text-blue-500 font-bold flex items-center justify-center gap-1 hover:underline bg-slate-800/80 p-2 rounded-md" href="/">
          Read More <ArrowRight className="h-4 w-4"/>
        </Link>
          <p className="text-muted-foreground">Comments (0)</p>
        
        
        
      </CardFooter>
    </Card>
    </HighlighterItem>
    </Highlighter>
  );
};
export default ArticleCard;
