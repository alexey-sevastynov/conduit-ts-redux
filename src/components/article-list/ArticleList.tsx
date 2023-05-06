import React from "react";
import Article from "../article/Article";
import Container from "../container/Container";

type ArticleListProps = {};

const ArticleList: React.FC<ArticleListProps> = () => {
  return (
    <div className="w-3/4">
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default ArticleList;
