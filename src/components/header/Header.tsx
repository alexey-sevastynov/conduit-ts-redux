import clsx from "clsx";
import React from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  //npm i clsx
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx("text-black/30 py-2", { "text-black/80 ": isActive });

  return (
    <header>
      <nav className="px-2 py-4 font-bold">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <Link className="text-2xl mr-8 text-green" to="/">
            Conduit
          </Link>
          <ul className="pl-0 mb-0 list-none flex ">
            <li className="ml-4">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink to="/signIn" className={navLinkClasses}>
                Sign in
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink to="/signUp" className={navLinkClasses}>
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
