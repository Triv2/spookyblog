import { Logo } from "@/components/logo"
import { Searchbar } from "@/components/searchbar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-gradient-to-l from-fuchsia-600/40 to-purple-900/60 flex items-center z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo/>
        <div className="space-x-2  md:w-auto flex items-center justify-between w-full">
          {/* <ModeToggle/> */}
          <Searchbar/>
         
          <div className="flex gap-2 items-center">
          <Button size="sm" variant="outline" asChild>
            <Link href="/">
            Login
            </Link>
          </Button>
          <Button size="sm"  asChild>
          <Link href="/">
            Join
            </Link>
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}