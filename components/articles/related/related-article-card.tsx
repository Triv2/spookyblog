'use client'
import {useState, useEffect} from'react'

import Link from 'next/link';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import localFont from "next/font/local";
import { cn } from '@/lib/utils';

interface RelatedArticleCardProps {}
const headingFont=localFont({
  src:"../../../public/fonts/flavors.woff2",
});


const RelatedArticleCard:React.FC<RelatedArticleCardProps> = () => {
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
   <p className="pl-2 text-purple-400/80">Category {'>'} Subcategory</p>
    <div className="flex items-center md:flex-row flex-col justify-evenly gap-2 z-40 sm:px-1" >
      
      <div className="min-w-[75px] max-w-[100px]">
      <Image alt="article" src="/headers/cmnobg1.png" width={100} height={100}/> 
      </div>
      <div className="flex flex-col items-center justify-start py-1 px-2 gap-1 ">
      
        <p className="text-purple-400/60 pl-1 text-sm line-clamp-4">One sentence that describes the article, maybe some extra length</p>
       <div className="flex items-start justify-between md:flex-row flex-col text-purple-200/60  w-full">
        <p className="text-xs pl-2">{new Date().toUTCString()}</p>
        
       </div>
       <div className="flex items-center justify-end w-full">
       <p className="text-xs md:pr-2 text-purple-200/80 ">Comments (0)</p>
       </div>
      </div>
     
    </div>
  </section>


  );
}
export default RelatedArticleCard;