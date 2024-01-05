import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SubcategoryCard from "../subcategories/subcategory-card";
import Highlighter, { HighlighterItem, HighlighterItem02 } from "../effects/highlighter";
import Image from "next/image";

interface NewsCardProps {}

const NewsCard = () => {
  return (
    
   
    
        <div className="flex items-center  gap-2 p-2 justify-center font-bold text-white text-lg  z-10">
        <Image className="rounded-md shadow-md"src="/avatars/avatarf2.png" alt="news1" width={60} height={100}/> 
        <div className="flex flex-col ">
        <Link className="text-purple-400 hover:underline hover:scale-105 rounded-full" href="/">
          News Article Title
          </Link>
          <p className="text-xs  text-purple-200/70 justify-between flex-col items-center">
          {new Date().toUTCString()}
        </p>
  
        </div>
          </div>
      
 
   
  
  );
};
export default NewsCard;
