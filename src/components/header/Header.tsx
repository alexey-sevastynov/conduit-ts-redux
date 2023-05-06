import clsx from "clsx";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../container/Container";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  //npm i clsx, NavLink react-router-dom
  type navLinkClassesProps = {
    isActive: boolean;
  };
  const navLinkClasses = ({ isActive }: navLinkClassesProps) =>
    clsx("py-2", {
      "text-black/30 hover:text-black/60 hover:no-underline": !isActive,
      "text-black/80 ": isActive,
    });

  return (
    <header>
      <nav className="px-2 py-4 font-bold">
        <Container>
          <div className="flex justify-between items-center">
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
        </Container>
      </nav>
    </header>
  );
};

export default Header;
