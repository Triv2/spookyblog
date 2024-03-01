import CategoryCard from "@/components/categories/category-card";
import Header from "./_components/header";
import { CategoryType, HeaderType } from "@/types";
import { getCategories, getCategoriesHeader } from "@/sanity/lib/query";

export const revalidate = 5;

const CategoryPage = async () => {
  const categoriesData: CategoryType[] = await getCategories();
  const categoryHeader: HeaderType[] = await getCategoriesHeader();

  return (
    <div className="flex items-center  flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg4.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
      {categoryHeader &&
        categoryHeader.map((item: HeaderType, index: number) => (
          <Header
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}

      <div className=" min-h-full bg-slate-900/80  w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2 pb-5 pt-5 sm:px-5">
        {categoriesData &&
          categoriesData.map((item: CategoryType, index: number) => (
            <CategoryCard
              key={index}
              href={item?.title}
              title={item.title}
              image={item.image}
              description={item?.description}
              subcategories={item.subcategory}
            />
          ))}
      </div>
    </div>
  );
};
export default CategoryPage;
