'use client'
import {useState, useEffect} from'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import Highlighter, { HighlighterItem } from '../effects/highlighter';

interface SubCategoryArticleProps {}

const SubCategoryArticle:React.FC<SubCategoryArticleProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <Highlighter className="px-2">
          <HighlighterItem className="px-2">
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="z-40">Article One</AccordionTrigger>
    <AccordionContent className="flex items-center justify-between z-40 px-1" >
      <p className="text-muted-foreground py-1 pl-2">Description of Article</p>
      <Link className="text-blue-500 text-md hover:scale-105 hover:text-blue-400 z-50" href="/">
        View 
      </Link>
    </AccordionContent>
  </AccordionItem>
</Accordion>
</HighlighterItem>
</Highlighter>
  );
}
export default SubCategoryArticle;