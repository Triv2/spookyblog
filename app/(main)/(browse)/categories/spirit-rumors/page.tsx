
import Header from "../_components/header";

import SubcategoryTabs from "@/components/subcategories/subcategory-tabs";
import { getCategory } from "@/sanity/lib/query";
import { CategoryType, CategoryTypeKeys } from "@/types";


const categoryName = CategoryTypeKeys.SR;

const SpritRumorsPage = async () => {
  const categoryHeader: CategoryType[] = await getCategory(categoryName);



  return (
    <div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg10.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
      <div className="bg-slate-900/40 min-h-screen h-auto w-full">
        {categoryHeader &&
          categoryHeader.map((item, index: number) => (
            <Header
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}

        <div className="flex items-center  justify-center w-full h-full ">
          <SubcategoryTabs subcategories={categoryHeader[0].subcategory} />
        </div>
      </div>
    </div>
  );
};
export default SpritRumorsPage;
