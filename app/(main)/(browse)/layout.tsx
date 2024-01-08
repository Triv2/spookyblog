import { Footer } from "@/app/(landing)/_components/footer";
import { Navbar } from "@/app/(landing)/_components/navbar";
import Particles from "@/components/effects/particles";

const BrowseLayout = ({
  children
}:{
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen h-auto w-full bg-slate-900">
      <Navbar/>
      <main >
      <Particles className="fixed inset-0  " />
      {children}
      </main>
      <Footer/>
    </div>
  )
}
export default BrowseLayout;