import React from "react";
import Container from "../container/Container";
import ArticleList from "../article-list/ArticleList";
import FeedToggle from "../feed-toggle/FeedToggle";
import { useGetGlobalFeedQuery } from "../../api/repository";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery("");

  if (isLoading) {
    return <Container>Feed Loading...</Container>;
  }

  if (error) {
    return <Container>Error while loading feed</Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <ArticleList list={data?.articles || []} />
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
