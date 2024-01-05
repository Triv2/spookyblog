import { Logo } from "@/components/logo"
import { Searchbar } from "@/components/searchbar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-gradient-to-l from-fuchsia-600/40 to-purple-900/60 flex items-center justify-center z-50">
      <div className=" flex items-center w-full justify-between ">
        <Logo/>
        
          {/* <ModeToggle/> */}
          <Searchbar/>
         
          {/* <div className="flex gap-2 items-center">
          <Button size="sm" variant="green" asChild>
            <Link href="/">
            Login
            </Link>
          </Button>
          <Button size="sm" variant="green" asChild>
          <Link href="/">
            Join
            </Link>
          </Button>
          </div> */}
       
      </div>
    </div>
  )
}