import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"

import {cn} from "@/lib/utils"

const  headingFont = localFont({
  src: "../public/fonts/rubikfont.woff2"
})

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/hero.png" alt="logo" width={30} height={30} />
      
      <p className={cn("text-lg text-black dark:text-purple-200/90 pt-1 ",headingFont.className)}>
        Master Blog</p>
        </div>
    </Link>
  )
}