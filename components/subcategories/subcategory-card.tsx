import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SubCategoryArticle from "./subcategory-article";
import { Image as SanityImage } from "sanity";
import { ScrollArea } from "../ui/scroll-area";

import ImageContainer from "../image-container";
import article from "@/sanity/schemas/articles/article";

type articleData = typeof article;

interface SubcategoryCardProps {
  href?: string;
  title?: string;
  description?: string;
  image: SanityImage;
  articles?:any;
}

const SubcategoryCard = ({
  href,
  title,
  description,
  image,
  articles,
}: SubcategoryCardProps) => {
 
  return (
    <Accordion className="z-20 rounded-3xl" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="z-20 px-2 text-emerald-400/80  hover:no-underline hover:bg-slate-700/70  flex justify-around gap-5 font-bold rounded-xl">
          {image && (
            <ImageContainer image={image} alt="cat" width={25} height={25} classesWrapper="max-h-[5rem] max-w-[5rem] " imageClassName="rounded-md shadow-xl"/>
          )}
          <div className="flex flex-col justify-start items-start">
            <p>{title}</p>
            <p className="text-purple-400/80 text-start text-xs py-1">{description}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col  rounded-3xl px-1 gap-y-1">
          <ScrollArea className="flex flex-col pl-5 gap-1 h-[250px]">
            {articles && articles.map((item: articleData, index: number) => (
                <SubCategoryArticle key={index} 
                  title={item.title} 
                  // @ts-ignore 
                  description={item.description} image={item.image} author={item.author} 
                />
            ))}
            
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default SubcategoryCard;
