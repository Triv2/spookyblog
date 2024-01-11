import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/rubikfont.woff2",
});
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center flex-col md:flex-row gap-2 justify-center">
      <Image src="/headers/slock.png" alt="authlogo" width={100} height={100}/>
      <h1 className={cn(
        "text-3xl font-semibold text-emerald-400 tracking-widest",
        headingFont.className,
      )}>
         Paranormal Portal
      </h1>
      </div>
      <p className="text-purple-300  text-center px-10 text-sm">
        {label}
      </p>
    </div>
  );
};