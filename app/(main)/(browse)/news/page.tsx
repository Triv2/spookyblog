import {   CategoryType, HeaderType,  } from "@/types";
import Header from "../categories/_components/header";
import { getNewsCategory } from "@/sanity/lib/query";
import SubcategoryTabs from "@/components/subcategories/subcategory-tabs";

export const revalidate = 5;


const NewsPage = async () => {

  const newsHeader: CategoryType[] = await getNewsCategory();
 

  return (
<div className="flex items-center  flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg4.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
      {newsHeader &&
        newsHeader.map((item: HeaderType, index: number) => (
          <Header
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
       <div className="flex items-center  justify-center w-full h-full ">
          <SubcategoryTabs subcategories={newsHeader[0].subcategory} />
        </div>

</div>
  );
}
export default NewsPage;