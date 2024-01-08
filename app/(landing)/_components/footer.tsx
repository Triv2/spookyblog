import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="block bottom-0 w-full  bg-gradient-to-tr from-emerald-700/50 via-fuchsia-600/40 to-purple-900/60 bg-opacity-50">
      <div className="  flex items-center w-full bg-slate-900/40 h-full justify-between p-4">
       <div className="hidden md:flex"> <Logo/></div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between z-10 w-full">
          <Button className="text-emerald-300/80" size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button className="text-emerald-300/80" size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}