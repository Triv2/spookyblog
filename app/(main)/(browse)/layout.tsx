import { Footer } from "@/app/(landing)/_components/footer";
import { Navbar } from "@/app/(landing)/_components/navbar";
import Particles from "@/components/effects/particles";

const BrowseLayout = ({
  children
}:{
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen h-auto dark:bg-fuchsia-900/40">
      <Navbar/>
      <main className="pt-14">
      <Particles className="fixed inset-0  " />
      {children}
      </main>
      <Footer/>
    </div>
  )
}
export default BrowseLayout;