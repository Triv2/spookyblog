import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SubcategoryCard from "../subcategories/subcategory-card";
import Highlighter, {
  HighlighterItem,
  HighlighterItem02,
} from "../effects/highlighter";
import Image from "next/image";

interface CategoryCardProps {}

const CategoryCard = () => {
  return (
    <div className=" bg-slate-900 rounded-md">
      <div className=" flex flex-col md:flex-row items-center justify-center w-full h-auto px-10  pl-10 ">
        <Image
          src="/headers/cmnobg1.png"
          alt="cat"
          width={100}
          height={100}
          className="opacity-90 "
        />
        <div className="flex justify-center  flex-col   p-2">
          <Link
            className="text-2xl  text-center text-emerald-400 sm:text-start font-bold flex items-center justify-center gap-1 hover:underline  z-10 rounded-full"
            href="/categories/cryptid-corner"
          >
            Cryptid Corner
          </Link>

          <p className="text-md text-purple-400/80 pl-2">Description of one sentence, nothing longer, nothing shorter.</p>
        </div>
      </div>

      <div className="flex flex-col gap-1  z-20 py-2 px-5 ">
        <SubcategoryCard />
        <SubcategoryCard />
        <SubcategoryCard />
      </div>
    </div>
  );
};
export default CategoryCard;
