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
    <Avatar className="h-10 w-10 shadow-md hover:shadow-purple-400">
          <AvatarImage className="opacity-90 bg-gradient-to-t from-emerald-400/70 to-purple-900/60 p-1" src={"/headers/sgear.png" || ""} />
          <AvatarFallback className="bg-gradient-to-t from-emerald-400/70 to-purple-900/60">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        </PopoverTrigger>
  <PopoverContent className="flex items-center flex-col gap-1 border-0 bg-gradient-to-tl from-emerald-700/60 to-purple-900/70 text-purple-400  w-full"> 

       <div className="pb-2">
        {user && user?.name && (
        <ProfileAbout
          name={user.name}
          imageUrl="/headers/sgear.png"
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