import CategoryCard from "@/components/categories/category-card";

import Header from "./_components/header";
import { client } from "@/sanity/lib/client";
import category from "@/sanity/schemas/categories/category";

type categoryData = typeof category;

export const revalidate= 5;

const CategoryPage = async () => {
  const data = await client.fetch(
    `*[_type == "category"]{title,image,description,subcategory[]->{title,description,image,article[]}}`
  );



  return (
    <div className="flex items-center  flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg4.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
      <Header
        title="Our Wicked and Wonderful World"
        description="Browse through the categories to find the articles you are interested in."
        imageUrl="/headers/spnobg2.png"
      />

      <div className=" min-h-full bg-slate-900/80  w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-2 pb-5 pt-5 md:px-5">
        {data && data.map((item:categoryData, index:number) => (
          <CategoryCard key={index} 
           href={item?.title}
           title={item.title}
            // @ts-ignore
           image={item.image} description={item?.description} subcategories={item.subcategory} articles={item.article}
          />
        ))}
      
      </div>
    </div>
  );
};
export default CategoryPage;
