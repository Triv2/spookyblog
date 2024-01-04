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

interface CategoryCardProps {}

const CategoryCard = () => {
  return (
    <Highlighter className="px-2">
      <HighlighterItem className="px-2">
    <Card className="bg-slate-900/90 p-0 z-20">
      <CardHeader>
        <CardTitle className="font-bold text-white text-lg">
        <Link className="text-blue-600 flex items-center justify-center gap-1 hover:underline  p-2 rounded-full" href="/">
          Category One
          </Link>
          </CardTitle>
        <CardDescription className="text-sm md:text-md text-white  justify-between flex-col items-center">
          Category One Description- Not longer than a paragraph. Maybe a total of three sentences will work best. Anything longer and it might get a bit confusing.
          
        </CardDescription>
        
        
        <CardContent className="flex flex-col gap-1  z-20 py-2">
        <SubcategoryCard/>
        <SubcategoryCard/>
        <SubcategoryCard/>
        </CardContent>
        
      </CardHeader>
    
    </Card>
    </HighlighterItem>
  </Highlighter>
  );
};
export default CategoryCard;
