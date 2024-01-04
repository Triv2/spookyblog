'use client'
import {useState, useEffect} from'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';

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
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Article One</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
      <Link href="/">
        View Article
      </Link>
    </AccordionContent>
  </AccordionItem>
</Accordion>
  );
}
export default SubCategoryArticle;