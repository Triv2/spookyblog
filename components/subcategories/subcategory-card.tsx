
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
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";

interface SubcategoryCardProps {}

const SubcategoryCard = () => {
  return (
  
    <Accordion className="z-20 rounded-3xl" type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="z-20 px-2 text-emerald-400/80  hover:no-underline hover:bg-slate-800/40 flex justify-around gap-5 font-bold rounded-3xl">
          <Image src="/headers/spnobg1.png" alt="subcategory" width={55} height={55} />
          <div className="flex flex-col">
          <p>Subcategory One</p>
          <p className="text-purple-400/80 text-xs py-1">
            Description of Subcategory. One maybe two sentences.
            </p>
            </div>
        </AccordionTrigger>
      <AccordionContent className="flex flex-col  rounded-3xl px-1 gap-y-1" >
        
        <ScrollArea className="flex flex-col pl-5 gap-1 h-[250px]">
       <SubCategoryArticle/>
       <SubCategoryArticle/>
       <SubCategoryArticle/>
       <SubCategoryArticle/>
       <SubCategoryArticle/>
       </ScrollArea>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  );
};
export default SubcategoryCard;
