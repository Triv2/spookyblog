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
import Link from "next/link";

interface ArticleCardProps {
  article?:Article;
}

const ArticleCard = ({
  article,
}:ArticleCardProps) => {
  return (
    <Card className="bg-slate-900/30">
      <CardHeader>
        <CardTitle className="font-bold md:text-lg lg:text-2xl text-white">Article One</CardTitle>
        <CardDescription className="text-sm md:text-xl text-white/70">
          Discover, research, share, collaborate, and understand everything you can with the Masterblog.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link className="text-blue-200  font-bold flex items-center justify-center gap-1 hover:underline bg-slate-900/60 p-2 rounded-md" href="/">
          Read More <ArrowRight className="h-4 w-4"/>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default ArticleCard;
