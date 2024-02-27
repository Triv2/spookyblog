import Header from "../_components/header";

import SubcategoryTabs from "@/components/subcategories/subcategory-tabs";
import { client } from "@/sanity/lib/client";
import category from "@/sanity/schemas/categories/category";

type categoryData = typeof category;

const CosmicMythologyPage = async () => {
  const data = await client.fetch(
    `*[_type == "category" && title == "Cosmic Mythology"]{title,image,description,subcategory[]->{title,description,image,article[]->{title,description,image,author}}}`
  );
  return (
    <div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg7.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
      <div className="bg-slate-900/40 min-h-screen flex flex-col items-center h-auto w-full">
      {data &&
          data.map((item: categoryData, index: number) => (
            <Header
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        <div className="flex items-center  justify-center w-full h-full ">
          <SubcategoryTabs />
        </div>
      </div>
    </div>
  );
};
export default CosmicMythologyPage;
