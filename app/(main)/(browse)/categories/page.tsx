import ArticleCard from "@/components/articles/article-card";
import CategoryCard from "@/components/categories/category-card";
import CategoryList from "@/components/categories/category-list";
import Particles from "@/components/effects/particles";

import Header from "./_components/header";

interface CategoryPageProps {}

const CategoryPage = () => {
  return (
<div className="flex items-center  flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg4.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
  

<Header 
  title="Our Wicked and Wonderful World"    
  description="Browse through the categories to find the articles you are interested in."
  imageUrl="/headers/spnobg2.png"
  />

<div className=" min-h-full bg-slate-900/80  w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2 pb-5 pt-5 px-5">
   
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