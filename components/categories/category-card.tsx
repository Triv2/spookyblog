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

interface CategoryCardProps {}

const CategoryCard = () => {
  return (
    <Card className="bg-slate-900/20">
      <CardHeader>
        <CardTitle className="font-bold text-white text-lg">
        <Link className="text-blue-600 flex items-center justify-center gap-1 hover:underline bg-slate-900/80 p-2 rounded-md" href="/">
          Category One
          </Link>
          </CardTitle>
        <CardDescription className="text-sm md:text-md text-white/70 md:flex justify-between flex-col hidden items-center">
          
          <Link className="text-blue-600 flex items-center justify-center gap-1 hover:underline bg-slate-900/80 p-2 rounded-md" href="/">
          SubCategoryOne
        </Link>
        <Link className="text-blue-600 flex items-center justify-center gap-1 hover:underline bg-slate-900/80 p-2 rounded-md" href="/">
          SubCategoryTwo
        </Link>
        <Link className="text-blue-600 flex items-center justify-center gap-1 hover:underline bg-slate-900/80 p-2 rounded-md" href="/">
          SubCategoryThree
        </Link>
        </CardDescription>
        
      </CardHeader>
    
    </Card>
  );
};
export default CategoryCard;
