'use client'
import {useState, useEffect, Suspense} from'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ArticleCard from '../articles/article-card';
import { ArticleSwitcher } from '../articles/article-switcher';
interface SubcategoryTabsProps {}

const SubcategoryTabs:React.FC<SubcategoryTabsProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <Tabs defaultValue="subcategories" className="w-full bg-slate-900/80">
  <TabsList className="bg-gradient-to-l  from-emerald-600/30 via-purple-700/50 to-emerald-900/60 opacity-80 flex flex-col md:flex-row rounded-none items-center justify-center w-auto h-auto ">
    <TabsTrigger className="hover:bg-emerald-400/50 hover:text-purple-700 text-emerald-400 z-10 data-[state=active]:text-emerald-300 data-[state=active]:bg-purple-600/70" value="subcategory1">Subcategory1</TabsTrigger>
    <TabsTrigger className="hover:bg-emerald-400/50 hover:text-purple-700 text-emerald-400 z-10 data-[state=active]:text-emerald-300 data-[state=active]:bg-purple-600/70"value="subcategory2">Subcategory2</TabsTrigger>
    <TabsTrigger className="hover:bg-emerald-400/50 hover:text-purple-700 text-emerald-400 z-10 data-[state=active]:text-emerald-300 data-[state=active]:bg-purple-600/70"value="subcategory3">Subcategory3</TabsTrigger>
  </TabsList>
  {/* <p className="text-sm p-1 text-purple-300/80 text-center">Select a subcategory tab to view and search all the articles in it.</p> */}
  <TabsContent value="subcategory1">
  <div className="flex items-center flex-col justify-center px-5 py-3 gap-2">
  <Suspense fallback={<ArticleSwitcher.Skeleton />}>
    <ArticleSwitcher/>
    </Suspense>
        </div>
  </TabsContent>
  <TabsContent value="subcategory2">
  <div className="flex items-center flex-col justify-center px-5 py-3 gap-2">
  <Suspense fallback={<ArticleSwitcher.Skeleton />}>
  <ArticleSwitcher/>
    </Suspense>    
        </div>
  </TabsContent>
  <TabsContent value="subcategory3">
  <div className="flex items-center flex-col justify-center px-5 py-3 gap-2">
  <Suspense fallback={<ArticleSwitcher.Skeleton />}>
  <ArticleSwitcher/>
    </Suspense> 
        </div>

  </TabsContent>
  
</Tabs>
  );
}
export default SubcategoryTabs;