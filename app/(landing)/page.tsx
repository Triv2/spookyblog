import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import Image from "next/image";
import CategoryCard from "@/components/categories/category-card";
import ArticleCard from "@/components/articles/article-card";
import Particles from "@/components/effects/particles";
import Box from "@/components/box";
import CategoryList from "@/components/categories/category-list";
import Sidebar from "./_components/sidebar";


const headingFont=localFont({
  src:"../../public/fonts/rubikfont.woff2",
});

const textFont =  Poppins({
  subsets: [ "latin"],
  weight:[
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg2.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full">
      
      
      
      <div className="flex items-center justify-center flex-col h-auto w-full bg-slate-900/40">
      
        <div className="flex items-center justify-start md:flex-row flex-col p-2 w-full ">
          <div className="lg:w-[30%]">
          <Image  src="/headers/hero.png" alt="logo" width={350} height={350}/>
          
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h1 className={cn("text-4xl md:text-7xl text-center text-emerald-400   mb-6",headingFont.className,)}>Paranormal</h1>
            <h1 className="text-xl md:text-3xl text-center font-semibold text-neutral-800 dark:text-purple-200/80 mb-3">
              All things weird and creepy.
            </h1>
            <div className={cn(
        "text-sm md:text-xl text-black dark:text-white/80 mt-2 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className
        )}>
        Discover, research, share, collaborate, and understand everything paranormal.
      </div>
            
        <Button className="mt-6 bg-gradient-to-b z-30 from-fuchsia-600 to-purple-600 hover:scale-105 text-white transition-all shadow-sm"  variant="secondary" asChild>
            <Link href="/">
           <p className="md:text-lg"> Join the <span className={cn("text-emerald-300  text-xl",headingFont.className,)}>Paranormal</span> for FREE!</p>
            </Link>
          </Button>
          </div>
        </div>
      </div>
              <div className="flex md:flex-row flex-col w-full h-auto px-5 gap-2 bg-slate-900/40 pb-5">
              <Particles className="fixed inset-0 z-10 " />
                <div className=" md:w-[20%] gap-1">
                  
                  <Sidebar/>
                </div>
                <div className="flex flex-col items-center text-white md:w-[80%] w-full gap-1 md:px-5 md:pr-10">
                
                  <ArticleCard/>
                  <ArticleCard/>
                  <ArticleCard/>
                  <ArticleCard/>
                  <ArticleCard/>
                </div>
              </div>
    </div>
  )
}

export default LandingPage;