import Link from "next/link";

import { Author, Profile } from "@prisma/client";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import ProfileAvatar from "./profile-avatar";

interface ProfileAboutProps {
  profile?:Profile;
  name?:string;
  imageUrl?:string;
  avatarClassName?:string;
}
const nameFont=localFont({
  src:"../../public/fonts/creepster.woff2",
});
const titleFont=localFont({
  src:"../../public/fonts/cevicheOne.woff2",
});
const ProfileAbout = ({
  profile,
  name,
  imageUrl,
  avatarClassName,
}:ProfileAboutProps) => {
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
         <ProfileAvatar name={name} imageUrl={imageUrl} className={avatarClassName}/>
          <div>
          <p className={cn("text-lg  font-bold text-purple-500/80")}>{name}</p>
          <p className={cn("text-md tracking-widest font-thin text-emerald-300/60",titleFont.className)}>Paranormal Initiate</p>
          </div>
        </Link>
       </div>
  );
}
export default ProfileAbout;