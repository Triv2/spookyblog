import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Article, Profile } from "@prisma/client";
import { ArrowRight } from "lucide-react";
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
        <CardTitle className="font-bold md:text-lg lg:text-2xl text-white">Article One Title</CardTitle>
       
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
      <CardFooter className="flex justify-evenly gap-2">
        <div className="flex md:flex-row flex-col gap-1">
        <Link className="text-blue-600 hover:scale-105 hover:text-blue-500 font-bold flex items-center justify-center gap-1 hover:underline bg-slate-800/80 p-2 rounded-md" href="/">
          Read More <ArrowRight className="h-4 w-4"/>
        </Link>
        <Link className="text-blue-600 hover:scale-105 hover:text-blue-500 font-bold flex items-center justify-center gap-1 hover:underline bg-slate-800/80 p-2 rounded-md" href="/">
          Share <ArrowRight className="h-4 w-4"/>
        </Link>
        <Link className="text-blue-600 hover:scale-105 hover:text-blue-500 font-bold flex items-center justify-center gap-1 hover:underline bg-slate-800/80 p-2 rounded-md" href="/">
          Comment <ArrowRight className="h-4 w-4"/>
        </Link>
        </div>
        <Link className="flex items-center justify-center gap-2 " href="/">
          <AuthorAvatar /> 
          <div>
          <p className="text-lg font-bold">Eru</p>
          <p className="text-md text-muted-foreground">Lead Paranormal Investigator</p>
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ArticleCard;
