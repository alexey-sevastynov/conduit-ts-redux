import React from "react";
import { Link } from "react-router-dom";

import ava from "../../assets/image/avatar.png";
import FavoriteButton from "../favorite-button/FavoriteButton";
import TagList from "../tag-list/TagList";
import { FeedArticle } from "../../api/dto/global-feed.in";

interface ArticleProps extends FeedArticle {}

const Article: React.FC<ArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 ">
        <div className="mb-4 mt-6 font-light inline-flex">
          <Link to={`/${author.username}`}>
            <img
              src={author.image}
              alt={author.username}
              className="inline-block h-8 w-8 rounded-full"
              width={32}
              height={32}
            />
          </Link>
          <div className="mr-6 ml-1 leading-4 flex flex-col ">
            <Link
              to={`/${author.username}`}
              className="font-medium inline-block"
            >
              {author.username}
            </Link>
            <span className="text-grey text-xs text-date">
              9 0ctober, {createdAt}
            </span>
          </div>
          <FavoriteButton count={favoritesCount} />
        </div>

        <Link
          to="/article/qwert"
          className="hover:no-underline hover:text-green"
        >
          <p className="mb-1 font-semibold text-2xl  text-black ">{title}</p>
          <p className="text-grey font-light mb-1">{description}</p>
        </Link>
        <div className="flex justify-between">
          <span className="text-grey font-light">Read more...</span>

          <TagList list={tagList} />
        </div>
      </div>
    </article>
  );
};

export default Article;
