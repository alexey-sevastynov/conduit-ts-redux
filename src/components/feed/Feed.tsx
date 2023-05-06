import React from "react";
import Container from "../container/Container";
import ArticleList from "../article-list/ArticleList";
import FeedToggle from "../feed-toggle/FeedToggle";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          suscipit, magnam non rem, culpa id nulla qui fuga adipisci tempore
          veniam aliquid est similique. Maxime tenetur beatae nemo hic
          provident?
        </div>
      </div>
    </Container>
  );
};

export default Feed;
