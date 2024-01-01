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

interface ArticleCardProps {
  article?:Article;
}

const ArticleCard = ({
  article,
}:ArticleCardProps) => {
  return (
    <Card className="bg-slate-900/80 w-full">
      <CardHeader>
        <CardTitle className="font-bold md:text-lg lg:text-2xl text-white">
          Article One Title
          </CardTitle>
          <CardDescription className="pl-2">
            {new Date().toUTCString()}
          </CardDescription>
       <div className="flex items-center gap-5">
          
          <Link className="flex items-center justify-center gap-2 " href="/">
          <AuthorAvatar /> 
          <div>
          <p className="text-lg font-bold">Eru</p>
          <p className="text-md text-muted-foreground">Lead Paranormal Investigator</p>
          </div>
        </Link>
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
        <div className="flex md:flex-row flex-col gap-1 items-center">
        <Link className="text-blue-600 hover:scale-105 hover:text-blue-500 font-bold flex items-center justify-center gap-1 hover:underline bg-slate-800/80 p-2 rounded-md" href="/">
          Read More <ArrowRight className="h-4 w-4"/>
        </Link>
          <p className="text-muted-foreground">Comments (0)</p>
        </div>
        <div className="flex">
          <div className="flex gap-1 text-muted-foreground items-center justify-center">
          <p>0</p>
          <ArrowUp className="h-4 w-4 text-emerald-600 "/>
          </div>
          <div className="flex gap-1 text-muted-foreground items-center justify-center">
          <ArrowDown className="h-4 w-4 text-purple-800"/>
          <p>0</p>
          </div>
        </div>
        
      </CardFooter>
    </Card>
  );
};
export default ArticleCard;
