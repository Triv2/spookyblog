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
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/buttons/logout-button";
import { Cog } from "lucide-react";
import Link from "next/link";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full focus:bg-purple-900" >
        <Avatar className="h-10 w-10 shadow-sm hover:shadow-emerald-400">
          <AvatarImage className="opacity-90" src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-gradient-to-tl from-emerald-600/40 to-purple-900/60 text-purple-400 bg-opacity-50" align="end">
      
          <DropdownMenuItem className="focus:text-emerald-300 focus:bg-emerald-400/30" >
            <Link className="flex items-center z-10" href="/settings">
            <Cog className="h-4 w-4 mr-2" />
            Settings
            </Link>
          </DropdownMenuItem>
      
        <LogoutButton>
          <DropdownMenuItem className="focus:text-emerald-300 z-10 focus:bg-emerald-400/30">
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};