
import { useCurrentRole } from "@/hooks/use-current-role";
import { Navbar } from "../(landing)/_components/navbar";
import { redirect } from "next/navigation";
import { UserRole } from "@prisma/client";

const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => {
  
  return ( 
    <div className="min-h-screen h-auto  bg-[url(/backgrounds/authbg3.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full">
      
      <div className="bg-slate-900/80 ">
        <Navbar/>
      {children}
      </div>
    </div>
   );
}
 
export default AuthLayout;