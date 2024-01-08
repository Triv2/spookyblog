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
import localFont from "next/font/local";
import { cn } from '@/lib/utils';

interface SubCategoryArticleProps {}
const headingFont=localFont({
  src:"../../public/fonts/flavors.woff2",
});


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
    
    <section onClick={onClick} className="p-2 hover:bg-emerald-600/20 rounded-md z-10 cursor-pointer">
   <p className={cn("z-40 text-emerald-400 tracking-widest text-lg font-bold", headingFont.className)}>Article One Title</p>
    <div className="flex items-center justify-evenly gap-2 z-40 sm:px-1" >
      <Image alt="article" src="/headers/cmnobg1.png" width={75} height={75}/> 
      <div className="flex flex-col items-center justify-start py-1 px-2 gap-1 ">
      
        <p className="text-purple-200/80 pl-1 text-sm line-clamp-4">One sentence that describes the article, maybe some extra length</p>
       <div className="flex items-start justify-between md:flex-row flex-col text-purple-200/60  w-full">
        <p className="text-xs pl-2">{new Date().toUTCString()}</p>
        <p className="text-xs hidden md:flex md:pr-2">Comments(0)</p>
       </div>
      </div>
     
    </div>
  </section>


  );
}
export default SubCategoryArticle;