"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/buttons/logout-button";
import { Cog, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserInfo } from "../user-info";
import ProfileAbout from "@/components/profile/profile-about";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/hooks/use-current-role";

export const UserButton = () => {
  const user = useCurrentUser();
  const role = useCurrentRole();

  return (
    
      <Popover>
  <PopoverTrigger className="rounded-full focus:bg-purple-900 ">
    <Avatar className="h-10 w-10 shadow-sm hover:shadow-emerald-400">
          <AvatarImage className="opacity-90" src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        </PopoverTrigger>
  <PopoverContent className="flex items-center flex-col gap-1  bg-gradient-to-tl from-emerald-600/40 to-purple-900/60 text-purple-400 bg-opacity-50 w-full"> 

       <div className="pb-2">
        {user && user?.name && (
        <ProfileAbout
          name={user.name}
          imageUrl="/avatars/avaf1.png"
        />)}
      </div>

          {role && role === UserRole.ADMIN && (
            <Button variant="blend" className="bg-opacity-50 w-full" asChild>
            <Link className="flex items-center z-10 focus:text-emerald-300 focus:bg-emerald-400/30 w-full" href="/dashboard">
            <Shield className="h-4 w-4 mr-2" />
            Admin
            </Link>
          </Button>
          )}



            <Button variant="blend" className="bg-opacity-50 w-full" asChild>
            <Link className="flex items-center z-10 focus:text-emerald-300 focus:bg-emerald-400/30 w-full" href="/settings">
            <Cog className="h-4 w-4 mr-2" />
            Settings
            </Link>
          </Button>
      
        <LogoutButton/>
        </PopoverContent>
</Popover>
    
   
  );
};