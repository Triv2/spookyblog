import { ScrollArea } from "../ui/scroll-area";
import ArticleListItem from "./article-list-item";
import { ArticleSwitcher } from "./article-switcher";

interface ArticleListProps {}

const ArticleList = () => {
  return (
<div className="flex items-center justify-center p-2 flex-col h-full">
  <div className="flex flex-col items-center justify-center h-full">
    <ArticleSwitcher/>
    <ScrollArea className="hidden md:flex min-h-[300px] h-full w-full">
    <ArticleListItem/>
    <ArticleListItem/>
    <ArticleListItem/>
    <ArticleListItem/>
    </ScrollArea>
  
</div>
</div>
  );
}
export default ArticleList;