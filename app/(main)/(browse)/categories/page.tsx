import ArticleCard from "@/components/articles/article-card";
import CategoryList from "@/components/categories/category-list";
import Particles from "@/components/effects/particles";

interface CategoryPageProps {}

const CategoryPage = () => {
  return (
<div className="flex items-center  flex-col min-h-screen h-auto bg-[url(/spookybg3.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full pb-5">
<Particles className="fixed inset-0 z-10 " />
<div className="h-[150px] bg-slate-900/50 w-full flex items-center justify-center">
  <h1 className="font-bold text-5xl">Our Wicked and Wonderful World</h1>

</div>
<div className="min-h-screen w-full flex">
    <div className="w-[30%} bg-slate-900/50 px-5 flex flex-col gap-2">
      <CategoryList/>
    </div>
    <div className="w-[70%] grid grid-cols-3">
      <ArticleCard/>
      <ArticleCard/>
      <ArticleCard/>
      <ArticleCard/>
      </div>
</div>
</div>
  );
}
export default CategoryPage;