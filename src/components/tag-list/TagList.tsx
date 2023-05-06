import React from "react";

type TagListProps = {};

const TagList: React.FC<TagListProps> = () => {
  return (
    <ul className="flex">
      <li className="text-light text-sl border border-gray-50 text-grey m-1 rounded font-light px-1">
        sdf
      </li>
      <li className="text-light text-sl border border-gray-50 text-grey m-1 rounded font-light px-1">
        sdf
      </li>
      <li className="text-light text-sl border border-gray-50 text-grey m-1 rounded font-light px-1">
        sdf
      </li>
    </ul>
  );
};

export default TagList;
