import Article from "./_components/article";

interface ArticleIdPageProps {}

const ArticleIdPage = () => {
  return (
<div className="flex flex-col min-h-screen h-auto bg-[url(/backgrounds/spookybg1.png)] bg-no-repeat bg-cover bg-fixed bg-center p-10">
  <div className=" h-full w-full bg-slate-900/80">
    
<Article/>
</div>
</div>
  );
}
export default ArticleIdPage;