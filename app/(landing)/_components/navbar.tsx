import { UserButton } from "@/components/auth/buttons/user-button"
import { Logo } from "@/components/logo"
import { Searchbar } from "@/components/searchbar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

import { currentUser } from "@/lib/auth"

export const Navbar = async () => {
  const user = await currentUser() || null;
  return (
    <div className="fixed top-0 w-full h-14   shadow-md shadow-purple-900/80 bg-gradient-to-bl from-emerald-700/50 via-fuchsia-600/40 to-purple-900/60 flex items-center justify-center z-50">
      <div className=" flex items-center w-full h-full z-40  justify-between  px-4">
        <Logo/>
        
          {/* <ModeToggle/> */}
          
          
          
          <div className="flex gap-2 items-center">
          <Searchbar/>
          {user ? (<UserButton/>):(
          <Button size="sm" variant="blend" asChild>
            <Link href="/auth/login">
            Login
            </Link>
          </Button>)}
          
          
          
          </div> 
       
      </div>
    </div>
  )
}