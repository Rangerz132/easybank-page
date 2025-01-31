import { ArticleType } from "../types/articleType";

const ArticleItem = (props: { article: ArticleType }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col">
      <div>
        <img
          className="w-full rounded-t-lg"
          src={props.article.thumbnail.path}
          alt={props.article.thumbnail.alt}
        />
      </div>
      <div className="flex flex-col space-y-2 p-6">
        {/** Author */}
        <div className="text-neutral-grayish-blue text-xs">
          By {props.article.author}
        </div>
        {/** Title */}
        <h4 className="text-primary-dark-blue text-">
          By {props.article.title}
        </h4>
        {/** Content */}
        <div className="text-neutral-grayish-blue  text-xs">
          {props.article.content}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
