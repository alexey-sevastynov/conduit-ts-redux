import React from "react";
import Article from "../article/Article";
import Container from "../container/Container";
import { FeedArticle } from "../../api/dto/global-feed.in";

type ArticleListProps = {
  list: FeedArticle[];
};

const ArticleList: React.FC<ArticleListProps> = ({ list }) => {
  return (
    <div className="w-3/4">
      {list.map((article) => (
        <Article key={article.title} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
