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
import Image from 'next/image';

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
    
  <section className="px-2">
    <article className="z-40 text-emerald-200 font-bold">Article One</article>
    <div className="flex items-center justify-evenly z-40 px-1" >
      <Image alt="article" src="/headers/cmnobg1.png" width={55} height={55}/> 
      <div className="flex flex-col items-start justify-start">
        <p className="text-purple-200/80 py-1 px-2  text-sm">One sentence that describes the article, maybe some extra length</p>
        <p className="text-xs pl-2">{new Date().toUTCString()}</p>
      </div>
      <Link className="text-emerald-500 text-md hover:underline hover:text-emerald-400 z-50" href="/">
        View 
      </Link>
    </div>
  </section>


  );
}
export default SubCategoryArticle;