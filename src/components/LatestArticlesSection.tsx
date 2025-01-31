import { LATEST_ARTICLES } from "../data";
import ArticlesList from "./ArticleList";

const LatestArticlesSection = () => {
  return (
    <div className="wrapper ">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl text-center text-primary-dark-blue">
          Latest Articles
        </h2>
        <ArticlesList articleList={LATEST_ARTICLES} />
      </div>
    </div>
  );
};

export default LatestArticlesSection;
