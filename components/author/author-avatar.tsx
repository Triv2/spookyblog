import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AuthorAvatarProps {
  imageUrl?:string;
  name?:string;
  className?:string;
}

const AuthorAvatar = ({
  imageUrl,
  name,
  className,
}: AuthorAvatarProps) => {
  return (

<Avatar className={className}>
  <AvatarImage src={imageUrl} />
  <AvatarFallback>{name}</AvatarFallback>
</Avatar>

  );
}
export default AuthorAvatar;