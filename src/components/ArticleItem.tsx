import { ArticleType } from "../types/articleType";

const ArticleItem = (props: { article: ArticleType }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col">
      <div className="h-52">
        <img
          className="w-full h-full object-cover rounded-t-lg "
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
        <h4 className="text-primary-dark-blue line-clamp-2 overflow-ellipsis">
          By {props.article.title}
        </h4>
        {/** Content */}
        <div className="text-neutral-grayish-blue text-xs line-clamp-4 overflow-ellipsis">
          {props.article.content}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
