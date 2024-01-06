import Link from "next/link";
import AuthorAvatar from "./author-avatar";
import { Author } from "@prisma/client";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

interface AuthorAboutProps {
  author?:Author;
}
const nameFont=localFont({
  src:"../../public/fonts/creepster.woff2",
});
const titleFont=localFont({
  src:"../../public/fonts/cevicheOne.woff2",
});
const AuthorAbout = ({
  author,
}:AuthorAboutProps) => {
  return (
<div className="flex items-center">
          
          <Link className="flex items-center justify-center gap-2 z-10" href="/">
         {/* {author && author.imageUrl &&( 
         <AuthorAvatar 
          name={author?.userName} 
          image={author.imageUrl}
          className="shadow-md shadow-emerald-500"
         /> 
         )} */}
         <AuthorAvatar name="Eru" imageUrl="/avatars/avaf1.png" className="shadow-md shadow-emerald-500 bg-purple-400/40"/>
          <div>
          <p className={cn("text-lg  font-bold text-purple-500/80")}>Anna</p>
          <p className={cn("text-md  text-emerald-300/60",titleFont.className)}>Lead Paranormal Researcher</p>
          </div>
        </Link>
       </div>
  );
}
export default AuthorAbout;