'use client'

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import SocialsContainer from "@/components/socials/socials-container";



interface SidebarProps {}

const Sidebar = () => {

  const onClick= () => {
    
  }

  return (
<div className="flex flex-col p-2 bg-slate-900/50 rounded-md font-bold z-20 ">
  <div className="flex flex-col items-center justify-center w-full p-2">
        <h2>Community News</h2>
        <Separator />
        <div  className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105 gap-1 z-30 transition-all" >
          Upcoming Articles
        </div>
        <div  className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105 gap-1 z-30 transition-all" >
          Monthly Update
        </div>
        
        <div  className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105 gap-1 z-30 transition-all" >
          Rising Creators
        </div>
    </div>
    <SocialsContainer/>
</div>
  );
}
export default Sidebar;