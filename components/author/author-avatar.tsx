import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AuthorAvatarProps {}

const AuthorAvatar = () => {
  return (

<Avatar className="shadow-md shadow-emerald-600">
  <AvatarImage src="/avatarf1.png"  />
  <AvatarFallback>Eru</AvatarFallback>
</Avatar>

  );
}
export default AuthorAvatar;