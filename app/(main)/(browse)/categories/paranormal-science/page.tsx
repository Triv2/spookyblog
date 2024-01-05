import Particles from "@/components/effects/particles";
import Header from "../_components/header";
import { SubcategorySwitcher } from "@/components/subcategories/subcategory-switcher";

interface ParanormalSciencePageProps {}

const ParanormalSciencePage = () => {
  return (
<div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg5.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full">
<div className="bg-slate-900/40 min-h-screen h-auto w-full">
<Header 
  title="Paranormal Science"    
  description="Try to understand the weird, strange, and unusual things"
  imageUrl="/headers/snobg2.png"
  />
  <div className="z-30">
  <SubcategorySwitcher/>
  </div>

</div>
</div>
  );
}
export default ParanormalSciencePage;