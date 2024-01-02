import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-gradient-to-l from-fuchsia-600/40 to-purple-900/60 flex items-center z-30">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo/>
        <div className="space-x-4 md:blockm md:w-auto flex items-center justify-between w-full">
          {/* <ModeToggle/> */}
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">
            Login
            </Link>
          </Button>
          <Button size="sm"  asChild>
          <Link href="/sign-up">
            Join for Free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}