import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="bg-gray-100 p-5 mx-auto lg:max-w-screen-xl">
      <div className="flex items-center justify-between">
        {/* logo */}
        <Link className="flex items-center">
          <BoltIcon className="h-6 w-6 mr-2 text-blue-500" />
          <h3 className="text-2xl font-bold tracking-wide text-gray-800">
            nextPage
          </h3>
        </Link>
        {/* menu bar */}
        <ul className="space-x-12 hidden lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </li>
        </ul>

        {/* mobile navbar section */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsOpenMenu(true)}
          >
            <Bars3BottomRightIcon className="w-5"></Bars3BottomRightIcon>
          </button>
          {isOpenMenu && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link className="flex items-center">
                      <BoltIcon className="h-6 w-6 mr-2 text-blue-500" />
                      <h3 className="text-2xl font-bold tracking-wide text-gray-800">
                        nextPage
                      </h3>
                    </Link>
                  </div>
                  {/* drop down menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsOpenMenu(false)}
                    >
                      <XMarkIcon className="w-5"></XMarkIcon>
                    </button>
                  </div>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/books"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
