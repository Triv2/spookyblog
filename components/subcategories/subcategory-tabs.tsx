"use client";
import { useState, useEffect, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ArticleSwitcher } from "../articles/article-switcher";
import subcategory from "@/sanity/schemas/categories/subcategory";


type subCategoryData = typeof subcategory;

interface SubcategoryTabsProps {
  subcategories: any[];
}

const SubcategoryTabs: React.FC<SubcategoryTabsProps> = ({
  subcategories,
}) => {
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
        {subcategories && subcategories.map((item:subCategoryData, index:number) => (
          <TabsTrigger
          key={index}
          className="hover:bg-purple-400/40 hover:text-emerald-200 text-emerald-400 z-10 data-[state=active]:text-emerald-300 data-[state=active]:bg-purple-600/70"
          value={item.title}
        >
          {item.title}
        </TabsTrigger>
        ))}
        
        
      
      </TabsList>
      {/* <p className="text-sm p-1 text-purple-300/80 text-center">Select a subcategory tab to view and search all the articles in it.</p> */}
      {subcategories && subcategories.map((item:subCategoryData, index:number) => (
        <TabsContent key={index} value={item.title}>
        <div className="flex items-center flex-col justify-center px-5 py-3 gap-2">
          <Suspense fallback={<ArticleSwitcher.Skeleton />}>
            <ArticleSwitcher articles={item.article}/>
          </Suspense>
        </div>
      </TabsContent>

      ))}
   
    </Tabs>
  );
};
export default SubcategoryTabs;
