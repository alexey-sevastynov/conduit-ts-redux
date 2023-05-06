import React from "react";
import { Link } from "react-router-dom";

import ava from "../../assets/image/avatar.png";
import FavoriteButton from "../favorite-button/FavoriteButton";
import TagList from "../tag-list/TagList";

type ArticleProps = {};

const Article: React.FC<ArticleProps> = () => {
  return (
    <article>
      <div className="border-t border-black/10 ">
        <div className="mb-4 mt-6 font-light inline-flex">
          <Link to="/nokwin">
            <img
              src={ava}
              alt="avatar"
              className="inline-block h-8 w-8 rounded-full"
              width={32}
              height={32}
            />
          </Link>
          <div className="mr-6 ml-1 leading-4 flex flex-col ">
            <Link to="/nokwin" className="font-medium inline-block">
              Daria Khorsun
            </Link>
            <span className="text-grey text-xs text-date">9 0ctober, 2020</span>
          </div>
          <FavoriteButton />
        </div>

        <Link
          to="/article/qwert"
          className="hover:no-underline hover:text-green"
        >
          <p className="mb-1 font-semibold text-2xl  text-black ">Some title</p>
          <p className="text-grey font-light mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            mollitia! Maxime, dicta? Consequuntur sed labore deserunt ab. Natus
            cupiditate temporibus ea obcaecati, quos corrupti? Quam accusantium
            quas exercitationem nisi? Exercitationem.
          </p>
        </Link>
        <div className="flex justify-between">
          <span className="text-grey font-light">Read more...</span>

          <TagList />
        </div>
      </div>
    </article>
  );
};

export default Article;
