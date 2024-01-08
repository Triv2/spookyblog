import Sidebar from "../../categories/_components/sidebar";
import Article from "./_components/article";

interface ArticleIdPageProps {}

const ArticleIdPage = () => {
  return (
<div className="flex flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg1.png)] bg-no-repeat bg-cover bg-fixed bg-center">
  <div className=" h-full w-full bg-slate-900/80 p-2 md:px-[2rem] pt-[6rem] flex  lg:flex-row flex-col gap-1 ">   
<Article/>
<Sidebar/>
</div>
</div>
  );
}
export default ArticleIdPage;