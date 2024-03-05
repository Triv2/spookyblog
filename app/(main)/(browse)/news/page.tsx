import Header from "../categories/_components/header";

interface NewsPageProps {}

const NewsPage = async () => {

  const newsData: HeaderType[] = await getCategories();
  return (
<div>
<Header
  title="News"
  description="All the spooky news"
  image=""
/>
</div>
  );
}
export default NewsPage;