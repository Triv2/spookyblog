import Article from "./_components/article";

interface ArticleIdPageProps {}

const ArticleIdPage = () => {
  return (
<div className="flex flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg1.png)] bg-no-repeat bg-cover bg-fixed bg-center ">
  <div className=" min-h-screen w-full bg-slate-900/80 p-2 md:p-10">
    
<Article/>
</div>
</div>
  );
}
export default ArticleIdPage;