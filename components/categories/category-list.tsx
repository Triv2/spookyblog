'use client'

import Link from "next/link";
import { Separator } from "../ui/separator";



interface CategoryListProps {}

const CategoryList = () => {

  const onClick= () => {
    
  }

  return (
<div className="hidden md:flex p-2 bg-slate-900/50 rounded-md font-bold z-20 ">
  <div className="flex flex-col items-center justify-center w-full p-2">
        <h2>Categories</h2>
        <Separator />
        <div  className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105 gap-1" >
          Cryptid Corner
          <div className=" pl-5 flex flex-col gap-1">
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
          </div>
        </div>
        <div  className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105 gap-1" >
          Cryptid Corner
          <div className=" pl-5 flex flex-col gap-1">
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
          </div>
        </div>
        <div  className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105 gap-1" >
          Cryptid Corner
          <div className=" pl-5 flex flex-col gap-1">
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
            <Link href="/route" className="sticky px-3 py-2 hover:text-blue-400 text-blue-500 hover:scale-105">
              Paranormal Science
            </Link>
          </div>
        </div>
       
   
    </div>
</div>
  );
}
export default CategoryList;