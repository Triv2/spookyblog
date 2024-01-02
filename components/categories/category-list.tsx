import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";


interface CategoryListProps {}

const CategoryList = () => {
  return (
<div className="fixed p-2 bg-slate-900/50 rounded-md font-bold z-20 ">
  <div className="flex flex-col items-center justify-center">
    <p className="text-2xl font-bold">Categories</p>
    <ScrollArea className="h-[350px]">
  <Link href="/route" className="sticky px-5 py-2 hover:text-blue-400 text-blue-500" >
    Cryptid Corner
  </Link>
  <Link href="/route" className="sticky px-5 py-2 hover:text-blue-400 text-blue-500">
    Paranormal Science
  </Link>
  <Link href="/route" className="sticky px-5 py-2 hover:text-blue-400 text-blue-500">
    CategoryThree
  </Link>
  </ScrollArea>
    </div>
</div>
  );
}
export default CategoryList;