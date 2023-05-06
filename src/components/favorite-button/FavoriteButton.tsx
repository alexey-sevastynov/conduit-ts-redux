import React from "react";

import like from "../../assets/image/heart.png";

interface FavoriteButtonProps {
  count: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ count }) => {
  return (
    <button className="text-green border border-green text-center align-middle cursor-pointer select-none py-1 px-1 text-sm rounded flex font-normal hover:bg-green hover:text-white transition ease-in-out duration-300 active:bg-darkGreen active:border-darkGreen">
      <img
        className="self-center"
        src={like}
        alt="like"
        width={12}
        height={12}
      />
      <span className="ml-1">{count}</span>
    </button>
  );
};

export default FavoriteButton;
