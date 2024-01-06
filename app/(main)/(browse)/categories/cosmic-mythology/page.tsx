import Particles from "@/components/effects/particles";
import Header from "../_components/header";
import { SubcategorySwitcher } from "@/components/subcategories/subcategory-switcher";
import Sidebar from "../_components/sidebar";
import SubcategoryTabs from "@/components/subcategories/subcategory-tabs";

interface CosmicMythologyPageProps {}

const CosmicMythologyPage = () => {
  return (
<div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg7.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
  <div className="bg-slate-900/40 min-h-screen flex flex-col items-center h-auto w-full">
  <Header 
  title="Cosmic Mythology"    
  description="Learn about lore and history of the paranormal from our ancestors."
  imageUrl="/headers/cmnobg2.png"
  />
  <div className="flex items-center  justify-center w-full h-full ">
  <SubcategoryTabs/>
  </div>
  

</div>

</div>
  );
}
export default CosmicMythologyPage;