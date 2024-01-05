import Image from "next/image";

interface HeaderProps {
  title:string;
  description:string;
  imageUrl:string;
}

const Header = ({
  title,
  description,
  imageUrl,
}:HeaderProps) => {
  return (
<div className=" flex items-center justify-center w-full h-auto px-10 py-4 pl-10 bg-slate-900/80">
  <Image src={imageUrl} alt={imageUrl} width={250} height={250} className="opacity-90 w-[15%]"/>
  <div className="flex justify-center  flex-col gap-2 w-[40%]">
  <h1 className="text-5xl font-bold">{title}</h1>
    <p className="text-lg">{description}</p>
  </div>

</div>
  );
}
export default Header;