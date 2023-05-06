import React from "react";

interface TagListProps {
  list: string[];
}

const TagList: React.FC<TagListProps> = ({ list }) => {
  return (
    <ul className="flex">
      {list.map((tag) => (
        <li
          key={tag}
          className="text-light text-sl border border-gray-50 text-grey m-1 rounded font-light px-1"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
