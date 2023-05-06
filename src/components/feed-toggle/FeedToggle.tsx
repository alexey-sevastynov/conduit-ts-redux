import React from "react";
import { NavLink } from "react-router-dom";

type FeedToggleProps = {};

const FeedToggle: React.FC<FeedToggleProps> = () => {
  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink to="/" className="border-b-2 border-green py-2 px-4">
            Global Feed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
