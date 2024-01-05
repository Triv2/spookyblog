
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SubCategoryArticle from "./subcategory-article";
import { Separator } from "../ui/separator";
import Highlighter, { HighlighterItem } from "../effects/highlighter";

interface SubcategoryCardProps {}

const SubcategoryCard = () => {
  return (
  
    <Accordion className="z-20  rounded-3xl" type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="z-20 px-2 text-emerald-300 font-bold rounded-3xl">Subcategory One</AccordionTrigger>
      <AccordionContent className="flex flex-col  rounded-3xl px-1 gap-y-1" >
        <div className="flex items-center justify-between gap-2 pl-3">
          <p className="text-purple-300/80 py-1">
            Description of Subcategory. One maybe two sentences.
            </p>
        <Link href="/" className="text-emerald-500 text-md hover:underline hover:text-emerald-400 z-50">
        Articles
        </Link>
        </div>
        <div className="flex flex-col pl-5">
       <SubCategoryArticle/>
       <SubCategoryArticle/>
       <SubCategoryArticle/>
       </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  );
};
export default SubcategoryCard;
