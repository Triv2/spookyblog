import { ArticleSwitcher } from "@/components/articles/article-switcher";
import Header from "../categories/_components/header";

interface ArticlesPageProps {}

const ArticlesPage = () => {
  return (
<div className="flex items-center justify-center flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg7.png)] bg-no-repeat bg-cover bg-fixed bg-center w-full ">
  <div className="bg-slate-900/40 min-h-screen flex flex-col items-center h-auto w-full">
  <Header
  title="Articles"    
  description="Open your mind and understand the paranormal"
  imageUrl="/headers/cmnobg2.png"
  />
  <div className="flex items-center  justify-center w-full h-full bg-slate-900/80 ">
  <ArticleSwitcher/>
  </div>
  

</div>

</div>
  );
}
export default ArticlesPage;