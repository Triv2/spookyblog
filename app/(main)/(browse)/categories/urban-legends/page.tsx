import Particles from "@/components/effects/particles";
import Header from "../_components/header";
import { SubcategorySwitcher } from "@/components/subcategories/subcategory-switcher";

interface UrbanLegendPageProps {}

const UrbanLegendPage = () => {
  return (
<div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg10.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
  <div className="bg-slate-900/40 min-h-screen h-auto w-full">
  <Header 
  title="Urban Legends"    
  description="Legends from cities all over the world"
  imageUrl="/headers/unobg1.png"
  />
  <div className="z-30">
  <SubcategorySwitcher/>
  </div>

</div>
</div>
  );
}
export default UrbanLegendPage;