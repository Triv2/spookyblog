import Link from "next/link";
import AuthorAvatar from "./author-avatar";
import { Author } from "@prisma/client";

interface AuthorAboutProps {
  author?:Author;
}

const AuthorAbout = ({
  author,
}:AuthorAboutProps) => {
  return (
<div className="flex items-center gap-5">
          
          <Link className="flex items-center justify-center gap-2 " href="/">
         {/* {author && author.imageUrl &&( 
         <AuthorAvatar 
          name={author?.userName} 
          image={author.imageUrl}
          className="shadow-md shadow-emerald-500"
         /> 
         )} */}
         <AuthorAvatar name="Eru" imageUrl="/avatarf1.png" className="shadow-md shadow-emerald-500"/>
          <div>
          <p className="text-lg font-bold">Eru</p>
          <p className="text-md text-muted-foreground">Lead Paranormal Investigator</p>
          </div>
        </Link>
       </div>
  );
}
export default AuthorAbout;