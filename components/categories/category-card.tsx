
import Link from "next/link";
import SubcategoryCard from "../subcategories/subcategory-card";
import { Image as SanityImage } from "sanity";
import ImageContainer from "../image-container";

interface CategoryCardProps {
  href?: string;
  title?: string;
  description?: string;
  subcategories?: object[];
  image: SanityImage;
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
    <div className=" bg-slate-900 rounded-md py-4 border border-purple-900/50 space-y-4 h-auto">
      <div className=" flex flex-col md:flex-row items-center justify-center w-full h-auto px-10  pl-10 ">
      {image &&(  <ImageContainer
          image={image}
          alt="cat"
          width={100}
          height={100}
        />)}
        <div className="flex justify-evenly h-full flex-col   p-2">
          <Link
            className="text-2xl  text-center text-emerald-400 sm:text-start font-bold flex items-center justify-center gap-1 hover:underline  z-10 "
            href={`/categories/${newhref}`}
          >
            {title}
          </Link>

          <p className="text-md text-purple-400/80 pl-2">{description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 h-auto z-20 py-2 px-5 ">
        <SubcategoryCard />
        <SubcategoryCard />
        <SubcategoryCard />
      </div>
    </div>
  );
};
export default CategoryCard;
