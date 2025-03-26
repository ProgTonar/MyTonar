import { getNewsRoutes } from "@/services/getNewsService";
import NewsClient from "./client";

const NewsPage = async () => {
  const news = await getNewsRoutes();
  return <NewsClient news={news} />;
};

export default NewsPage;
