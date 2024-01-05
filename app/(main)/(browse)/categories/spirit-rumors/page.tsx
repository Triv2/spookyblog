import Particles from "@/components/effects/particles";
import Header from "../_components/header";

interface SpritRumorsPageProps {}

const SpritRumorsPage = () => {
  return (
<div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg9.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full">
<div className="bg-slate-900/40 min-h-screen h-auto w-full">
<Header 
  title="Spirit Rumors"    
  description="Find out what the spirits have to say about the current times"
  imageUrl="/headers/spnobg1.png"
  />
<Particles className="fixed inset-0 z-10 " />
</div>
</div>
  );
}
export default SpritRumorsPage;