import { LATEST_ARTICLES } from "../../data";
import ArticlesList from "./ArticleList";

const LatestArticlesSection = () => {
  return (
    <div className="wrapper ">
      <div className="flex flex-col items-center justify-center space-y-10 md:items-start">
        <h2 className="text-3xl text-center text-primary-dark-blue md:text-left">
          Latest Articles
        </h2>
        <ArticlesList articleList={LATEST_ARTICLES} />
      </div>
    </div>
  );
};

export default LatestArticlesSection;
