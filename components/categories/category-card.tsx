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
        <CardTitle className="font-bold text-white text-lg">Category One</CardTitle>
        <CardDescription className="text-sm md:text-md text-white/70">
          Discover, research, share, collaborate, and understand everything you can with the Masterblog.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link className="text-blue-600 flex items-center justify-center gap-1 hover:underline" href="/">
          Read More <ArrowRight className="h-4 w-4"/>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CategoryCard;
