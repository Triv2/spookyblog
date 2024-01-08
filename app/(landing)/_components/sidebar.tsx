'use client'

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import SocialsContainer from "@/components/socials/socials-container";
import NewsCard from "@/components/news/news-card";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont=localFont({
  src:"../../../public/fonts/cevicheOne.woff2",
});

interface SidebarProps {}

const Sidebar = () => {

  const onClick= () => {
    
  }

  return (
<div className="flex flex-col p-2 bg-slate-900 rounded-md font-bold z-20 border-purple-900/50 border">
  <div className="flex flex-col  justify-center w-full p-2">
        <h2 className={cn("text-3xl tracking-wider text-emerald-400",headingFont.className)}>Community News</h2>
        <Separator />
        <div className="flex items-center justify-center py-1 flex-wrap">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        
        </div>
    </div>
    <SocialsContainer/>
</div>
  );
}
export default Sidebar;