import Particles from "@/components/effects/particles";

interface CategoryPageProps {}

const CategoryPage = () => {
  return (
<div className="flex items-center  flex-col min-h-screen h-auto bg-[url(/spookybg3.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full pb-5">
<Particles className="fixed inset-0 z-10 " />
<div className="h-[150px] bg-slate-900/50 w-full flex items-center justify-center">
  <h1 className="font-bold text-5xl">Our Wicked and Wonderful World</h1>
  
</div>
<div className="h-auto w-full flex items-center">
    <div className="w-[30%}">
      <div>
        Categories SideBar
      </div>
      <div>
        SubCategories
      </div>
    </div>
    <div className="w-[70%]">Articles Per Category</div>
</div>
</div>
  );
}
export default CategoryPage;