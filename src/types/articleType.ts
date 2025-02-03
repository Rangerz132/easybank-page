export type ArticleType = {
  id: string;
  author: string;
  title: string;
  content: string;
  thumbnail: {
    path: string;
    alt: string;
  };
};
