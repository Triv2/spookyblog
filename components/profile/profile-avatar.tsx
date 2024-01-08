import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileAvatarProps {
  imageUrl?:string;
  name?:string;
  className?:string;
}

const ProfileAvatar = ({
  imageUrl,
  name,
  className,
}: ProfileAvatarProps) => {
  return (

<Avatar className={className}>
  <AvatarImage src={imageUrl} />
  <AvatarFallback>{name}</AvatarFallback>
</Avatar>

  );
}
export default ProfileAvatar;