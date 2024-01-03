import Image from "next/image";
import Link from "next/link";

interface SocialButtonProps {
  href:string;
  image:string;
  name:string;
  className:string;
}

const SocialButton = ({
  href,
  image,
  name,
  className,
}:SocialButtonProps) => {
  return (
<Link href={href} className={className}>
  <Image src={image} alt={name} width={24} height={24} />
</Link>
  );
}
export default SocialButton;