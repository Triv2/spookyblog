'use client'
import {useState, useEffect} from'react'

interface SidebarProps {}

const Sidebar:React.FC<SidebarProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <div className="w-[30%} bg-slate-900/50 px-5 flex flex-col gap-2">
      <div className="text-xl">
        Category
      </div>
      <div className="pl-4 flex flex-col gap-1">
        <div>
          SubCategory
        </div>
        <div>
          SubCategory
        </div>
        <div>
          SubCategory
        </div>
      </div>
    </div>
  );
}
export default Sidebar;