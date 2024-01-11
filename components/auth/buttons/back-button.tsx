"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
};

export const BackButton = ({
  href,
  label,
}: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="font-normal w-full"
      size="sm"
      asChild
    >
      <Link className="text-purple-400" href={href}>
        {label}
      </Link>
    </Button>
  );
};