import { useParams } from "react-router";
import { LATEST_ARTICLES } from "../../../data";
import { ArticleType } from "../../../types/articleType";

const Article = () => {
  const { id } = useParams();
  const currentArticle: ArticleType | undefined = LATEST_ARTICLES.find(
    (article) => article.id == id
  );

  if (!currentArticle) {
    return;
  }

  return <div>{currentArticle.title}</div>;
};

export default Article;
