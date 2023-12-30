import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import Image from "next/image";


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

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col  h-auto">
      <div className="flex items-center justify-center flex-col h-auto">
        <div className="flex items-center justify-center md:flex-row flex-col p-2">
          <Image className="animate-pulse animate-duration-[5000ms] animate-delay-[2000ms] animate-ease-in" src="/hero.png" alt="logo" width={450} height={450}/>

          <div className="flex flex-col items-center justify-center">
            <h1 className={cn("text-4xl md:text-7xl text-center text-neutral-800 dark:text-purple-300   mb-6",headingFont.className,)}>Master Blog</h1>
            <h1 className="text-xl md:text-3xl text-center font-semibold text-neutral-800 dark:text-purple-200/80 mb-6">
              Find the best content and resources for your research.
            </h1>
            <div className={cn(
        "text-sm md:text-xl text-black dark:text-white/80 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className
        )}>
        Discover, research, share, collaborate, and understand. From the highest mountain to the lowest valley, learn everything you can with the Masterblog.
      </div>
            
        <Button className="mt-6 bg-gradient-to-b from-fuchsia-600 to-purple-600 hover:scale-105 text-white transition-all shadow-sm" size="lg" variant="secondary" asChild>
            <Link href="/sign-up">
            Join the MasterBlog  Now!
            </Link>
          </Button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default MarketingPage;