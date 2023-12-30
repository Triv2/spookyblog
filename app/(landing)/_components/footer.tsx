import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  p-4 border-t  bg-gradient-to-r from-fuchsia-600/40 to-purple-900/80">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo/>
        <div className="space-x-4 md:blockm md:w-auto flex items-center justify-between w-full">
          <Button className="text-black dark:text-white/80" size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button className="text-black dark:text-white/80" size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}