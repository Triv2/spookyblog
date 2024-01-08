import Particles from "@/components/effects/particles";
import Header from "../_components/header";
import { SubcategorySwitcher } from "@/components/subcategories/subcategory-switcher";
import SubcategoryTabs from "@/components/subcategories/subcategory-tabs";

interface CryptidCornerPageProps {}

const CryptidCornerPage = () => {
  return (
<div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg6.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full">
<div className=" min-h-screen h-auto w-full">
<Header 
  title="Cryptid Corner" 
  description="The place for the creepy crawlers, elusive creatures, and mysterious entities"
  imageUrl="/headers/cnobg1.png"
  />
 <div className="flex items-center  justify-center w-full h-full ">
  <SubcategoryTabs/>
  </div>

</div>
</div>
  );
}
export default CryptidCornerPage;