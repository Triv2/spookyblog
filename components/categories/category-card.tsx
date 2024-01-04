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

interface CategoryCardProps {}

const CategoryCard = () => {
  return (
    <Card className="bg-slate-900/20 p-0">
      <CardHeader>
        <CardTitle className="font-bold text-white text-lg">
        <Link className="text-blue-600 flex items-center justify-center gap-1 hover:underline bg-slate-900/80 p-2 rounded-md" href="/">
          Category One
          </Link>
          </CardTitle>
        <CardDescription className="text-sm md:text-md text-white/70  justify-between flex-col items-center">
          Category One Description- Not longer than a paragraph. Maybe a total of three sentences will work best. Anything longer and it might get a bit confusing.
          
        </CardDescription>
        <CardContent>
        <SubcategoryCard/>
        <SubcategoryCard/>
        <SubcategoryCard/>
        </CardContent>
        
      </CardHeader>
    
    </Card>
  );
};
export default CategoryCard;
