import Particles from "@/components/effects/particles";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const LandingLayout = ({
  children
}:{
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen h-auto w-full bg-slate-900">
      <Navbar/>
      <main className="bg-slate-900 z-10">
      <Particles className="fixed inset-0  " />
      {children}
      </main>
      <Footer/>
    </div>
  )
}
export default LandingLayout;