"use client";

import { logout } from "@/actions/auth/logout";
import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

interface LogoutButtonProps {
  children?: React.ReactNode;
};

export const LogoutButton = ({
  children
}: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <Button onClick={onClick} variant="blend" className=" cursor-pointer z-10  flex items-center w-full" >
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
    </Button>
  );
};