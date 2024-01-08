import SubCategoryArticle from "../../subcategories/subcategory-article";
import RelatedArticleCard from "./related-article-card";

interface RelatedArticlesProps {}

const RelatedArticles = () => {
  return (
<div className="flex  flex-wrap min-w-[250px] w-auto items-center justify-evenly gap-2 p-2 border rounded-md border-purple-900/50 z-10">
<RelatedArticleCard/>
<RelatedArticleCard/>
<RelatedArticleCard/>

</div>
  );
}
export default RelatedArticles;