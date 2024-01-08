'use client'
import ArticleList from '@/components/articles/article-list';
import RelatedArticles from '@/components/articles/related/related-articles';
import CategoryCard from '@/components/categories/category-card';
import Comments from '@/components/comments/comments';
import SubcategoryCard from '@/components/subcategories/subcategory-card';
import {useState, useEffect} from'react'
import localFont from "next/font/local";
import { cn } from '@/lib/utils';

interface SidebarProps {}

const headingFont=localFont({
  src:"../../../../../public/fonts/cevicheOne.woff2",
});


const Sidebar:React.FC<SidebarProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <div className="h-full md:w-[30%] bg-slate-900 p-1 md:px-5 flex flex-col gap-2 border-[1px] rounded-md border-emerald-900/60">
      
      <div className="p-2">
        <p className={cn("font-bold tracking-wider text-3xl text-emerald-400 py-2",headingFont.className)}>Related Articles</p>
      <RelatedArticles/>
      </div>
    </div>
  );
}
export default Sidebar;