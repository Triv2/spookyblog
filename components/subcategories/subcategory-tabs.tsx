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
    <Tabs defaultValue="account" className="w-full bg-slate-900/80">
  <TabsList className="bg-gradient-to-l from-fuchsia-600/30 to-purple-900/60 flex rounded-none items-center justify-center ">
    <TabsTrigger className="hover:bg-green-300/50 hover:text-purple-700 text-emerald-400 z-10 data-[state=active]:text-purple-400 data-[state=active]:bg-emerald-600/40" value="subcategory1">Subcategory1</TabsTrigger>
    <TabsTrigger className="hover:bg-green-300/50 hover:text-purple-700 text-emerald-400 z-10 data-[state=active]:text-purple-400 data-[state=active]:bg-emerald-600/40"value="subcategory2">Subcategory2</TabsTrigger>
    <TabsTrigger className="hover:bg-green-300/50 hover:text-purple-700 text-emerald-400 z-10 data-[state=active]:text-purple-400 data-[state=active]:bg-emerald-600/40"value="subcategory3">Subcategory3</TabsTrigger>
  </TabsList>
  {/* <p className="text-sm p-1 text-purple-300/80 text-center">Select a subcategory tab to view and search all the articles in it.</p> */}
  <TabsContent value="subcategory1">
  <div className="flex items-center flex-col justify-center px-5 py-3 gap-2">
    <ArticleSwitcher/>
     
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