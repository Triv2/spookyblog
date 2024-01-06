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

interface ArticleListItemProps {

}

const ArticleListItem:React.FC<ArticleListItemProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) { 
return null;
}
  return (
    
  <section className="p-3 hover:bg-slate-800 flex flex-col rounded-md w-full">
   
   <div className="flex items-center justify-between text-purple-200/60  w-full">
    <p className="z-40 text-emerald-400  text-md font-bold">Article One</p>
    <p className="text-xs ">Comments(0)</p>
    </div>
   
   <p className="pl-2 text-purple-400/80 text-sm">Category {'>'} Subcategory</p>
    <div className="flex items-center justify-evenly gap-2 z-40 px-1" >

      <Image alt="article" src="/headers/cmnobg1.png" width={75} height={75}/> 

      <div className="flex flex-col items-start justify-start py-1 px-2 ">
        <p className="text-purple-200/80 pl-1 text-sm">One sentence that describes the article, maybe some extra length</p>
      </div>

      
     
    </div>
    <div className="flex flex-col text-purple-200/60  w-full">
        <p className="text-xs ">{new Date().toUTCString()}</p>
        
        
       </div>
  </section>


  );
}
export default ArticleListItem;