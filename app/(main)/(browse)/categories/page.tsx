import ArticleCard from "@/components/articles/article-card";
import CategoryCard from "@/components/categories/category-card";
import CategoryList from "@/components/categories/category-list";
import Particles from "@/components/effects/particles";
import { Searchbar } from "@/components/searchbar";

interface CategoryPageProps {}

const CategoryPage = () => {
  return (
<div className="flex items-center  flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg4.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
  
<Particles className="fixed inset-0 z-10 " />
<div className="h-[150px] bg-slate-900/50 w-full flex flex-col items-center justify-center gap-2 p-2 pt-5 pb-5">
  <h1 className="font-bold text-2xl lg:text-5xl">Our Wicked and Wonderful World</h1>
    <p className="text-mdmd:text-lg px-2">Browse through the categories to find the articles you are interested in, or use the searchbar.</p>
    
</div>
<div className="min-h-screen bg-slate-900/50 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2 pb-5">
   
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      
</div>

</div>
  );
}
export default CategoryPage;