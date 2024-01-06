'use client'
import ArticleList from '@/components/articles/article-list';
import CategoryCard from '@/components/categories/category-card';
import SubcategoryCard from '@/components/subcategories/subcategory-card';
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
    <div className="h-full bg-slate-900/80 px-5 flex flex-col gap-2">
      
      <ArticleList/>
    </div>
  );
}
export default Sidebar;