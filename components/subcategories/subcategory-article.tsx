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
import { useRouter } from 'next/navigation';

interface SubCategoryArticleProps {}

const SubCategoryArticle:React.FC<SubCategoryArticleProps> = () => {
const router = useRouter();
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) { 
return null;
}
const onClick=()=>{
  router.push('/articles/test');
}
  return (
    
  <section onClick={onClick} className="px-2 py-2 hover:bg-slate-800">
   <p className="z-40 text-emerald-200 text-center  text-md font-bold">Article One</p>
    <div className="flex items-center justify-evenly gap-2 z-40 px-1" >
      <Image alt="article" src="/headers/cmnobg1.png" width={75} height={75}/> 
      <div className="flex flex-col items-start justify-start py-1 px-2 ">
      
        <p className="text-purple-200/80 pl-1 text-sm">One sentence that describes the article, maybe some extra length</p>
       <div className="flex justify-between text-purple-200/60 items-center w-full">
        <p className="text-xs pl-2">{new Date().toUTCString()}</p>
        <p className="text-xs pr-2">Comments(0)</p>
       </div>
      </div>
     
    </div>
  </section>


  );
}
export default SubCategoryArticle;