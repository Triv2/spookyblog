import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import CategoryCard from "@/components/categories/category-card";
import ArticleCard from "@/components/articles/article-card";
import Particles from "@/components/effects/particles";
import Box from "@/components/box";
import CategoryList from "@/components/categories/category-list";
import Sidebar from "./_components/sidebar";

const headingFont = localFont({
  src: "../../public/fonts/rubikfont.woff2",
});
const subHeadingFont = localFont({
  src: "../../public/fonts/creepster.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const LandingPage = () => {
  return (
    <div className=" min-h-screen h-auto bg-[url(/backgrounds/spookybg2.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
      <div className="bg-slate-900/70">
      <div className="flex items-center justify-center flex-col h-auto w-full pt-14 ">
        <div className="flex items-center justify-start md:flex-row flex-col p-2 w-full ">
          <div className="lg:w-[30%] flex items-center justify-center ">
            <Image
              src="/avatars/avaf1.png"
              className="transform -scale-x-100"
              alt="logo"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h1
              className={cn(
                "text-4xl sm:text-7xl text-center text-emerald-400   ",
                headingFont.className
              )}
            >
              Paranormal
            </h1>

            <div
              className={cn(
                "text-xl md:text-3xl text-purple-200/80 mt-2 max-w-xs  tracking-widest md:max-w-2xl text-center mx-auto",
                subHeadingFont.className
              )}
            >
              Discover the unknown, research the bizarre, and reach into the
              great beyond
            </div>

            {/* <Button className="mt-6 text-purple-300 hover:text-purple-200 z-30 group hover:scale-105 transition-all shadow-sm"  variant="purple" asChild>
            <Link href="/">
           <p className="md:text-lg"> Join the <span className={cn("text-emerald-300 group-hover:text-emerald-200 text-xl",headingFont.className,)}>Paranormal</span> for FREE!</p>
            </Link>
          </Button> */}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-full h-auto px-5 gap-2  pb-5">
        <div className=" lg:max-w-[25%] gap-1">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center text-white lg:w-[75%] w-full gap-1 lg:px-5 lg:pr-10">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
