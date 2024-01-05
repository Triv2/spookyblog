'use client'

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import SocialsContainer from "@/components/socials/socials-container";
import NewsCard from "@/components/news/news-card";



interface SidebarProps {}

const Sidebar = () => {

  const onClick= () => {
    
  }

  return (
<div className="flex flex-col p-2 bg-slate-900 rounded-md font-bold z-20 ">
  <div className="flex flex-col  justify-center w-full p-2">
        <h2 className="text-xl text-emerald-400">Community News</h2>
        <Separator />
        <div className="flex flex-wrap">
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