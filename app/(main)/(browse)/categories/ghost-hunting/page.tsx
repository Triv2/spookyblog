import Particles from "@/components/effects/particles";
import Header from "../_components/header";
import { SubcategorySwitcher } from "@/components/subcategories/subcategory-switcher";
import SubcategoryTabs from "@/components/subcategories/subcategory-tabs";

interface GhostHuntingPageProps {}

const GhostHuntingPage = () => {
  return (
<div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg8.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full">
<div className="bg-slate-900/40 min-h-screen h-auto w-full">
<Header 
  title="Ghost Hunting"  
  description="The place for finding mysterious spirits, shadows, and other spiritual things"
  imageUrl="/headers/gnobg1.png"
  />
  <div className="flex items-center  justify-center w-full h-full ">
  <SubcategoryTabs/>
  </div>

</div>
</div>
  );
}
export default GhostHuntingPage;