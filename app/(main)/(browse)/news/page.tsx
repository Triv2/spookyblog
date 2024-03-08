import {  HeaderType } from "@/types";
import Header from "../categories/_components/header";
import { getNewsHeader } from "@/sanity/lib/query";

export const revalidate = 5;



const NewsPage = async () => {

  const newsHeader: HeaderType[] = await getNewsHeader();

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
        <div>
          Article List</div>

</div>
  );
}
export default NewsPage;