import Link from "next/link";
import SubcategoryCard from "../subcategories/subcategory-card";
import ImageContainer from "../image-container";
import subcategory from "@/sanity/schemas/categories/subcategory";

type subCategoryData = typeof subcategory;

interface CategoryCardProps {
  href?: string;
  title?: string;
  description?: string;
  subcategories?: any[];
  image: {
    alt: string;
    asset?: any; 
  };
}

const CategoryCard = ({
  href,
  title,
  description,
  subcategories,
  image,
}: CategoryCardProps) => {
  let newhref = href?.replace(/\s/g, "-").toLowerCase();


  
  return (
    <div className=" bg-slate-900 rounded-md py-4 border border-purple-900/50 space-y-4 h-full w-full ">
      <div className=" flex flex-col md:flex-row items-center justify-center w-full md:h-[12rem] py-[1rem]  px-10  pl-10 ">
        {image && (
          <ImageContainer image={image} alt={image.alt} width={500} height={500} classesWrapper="h-[10rem] w-[10rem] aspect-square" />
        )}
        <div className="flex justify-evenly h-full flex-col lg:min-h-[10rem] lg:pt-5 p-2">
          <Link
            className="text-2xl  text-center text-emerald-400 sm:text-start font-bold flex items-center h-full lg:h-[30%]  gap-1 hover:underline  z-10 "
            href={`/categories/${newhref}`}
          >
            {title}
          </Link>

          <p className="text-md h-full text-purple-400/80 pl-2">{description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 h-auto z-20 py-2 px-5 ">
        {subcategories &&
          subcategories.map((item: subCategoryData, index: number) => (
            <SubcategoryCard key={index} 
              title={item.title}
              //@ts-ignore
              description={item.description} image={item.image} articles={item.article}
              href={item.title} 
           />
          ))}
     
      </div>
    </div>
  );
};
export default CategoryCard;
