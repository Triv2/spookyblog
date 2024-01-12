import Image from "next/image";
import Link from "next/link";

interface SocialButtonProps {
  href:string;
  
  name:string;
  className:string;
  icon:JSX.Element;
}

const SocialButton = ({
  href,
  icon,
  name,
  className,
}:SocialButtonProps) => {
  return (
<Link href={href} className={className}>
  {icon}
</Link>
  );
}
export default SocialButton;