import Header from "../_components/header";

import SubcategoryTabs from "@/components/subcategories/subcategory-tabs";
import { client } from "@/sanity/lib/client";
import category from "@/sanity/schemas/categories/category";

type categoryData = typeof category;

const CryptidCornerPage = async () => {
  const data = await client.fetch(
    `*[_type == "category" && title == "Cryptid Corner"]{title,image,description,subcategory[]->{title,description,image,article[]->{title,description,image,author}}}`
  );
  return (
    <div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg6.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full">
      <div className=" min-h-screen h-auto w-full">
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
export default CryptidCornerPage;
