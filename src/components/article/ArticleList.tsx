import { ArticleType } from "../../types/articleType";
import ArticleItem from "./ArticleItem";

const ArticlesList = (props: { articleList: ArticleType[] }) => {
  return (
    <div className="grid grid-cols-1 space-y-6 lg:space-y-0 md:space-x-6 md:grid-cols-2 lg:grid-cols-4">
      {props.articleList.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
