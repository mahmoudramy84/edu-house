import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ThemeSwitcher from "./ThemeSwitcher";
import ToggleMenuButton from "../ToggleMenuButton";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-lg dark:shadow-none">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-12">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse mx-auto mb-5 sm:mb-0 sm:m-0 "
        >
          <Image src="" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </span>
        </Link>

        {/* links */}
        <div className="hidden w-full lg:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto justify-between sm:justify-end">
          {/* search */}
          <div
            className="ring-2 ring-gray-300 rounded-full px-2 text-xs
        flex items-center"
          >
            <FaMagnifyingGlass className="text-gray-400" cursor="pointer" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-[150px] bg-transparent p-2"
            />
          </div>
          {/* shopping cart */}
          <div className=" w-8 h-8 rounded-full ring-2 ring-gray-300 flex items-center justify-center cursor-pointer relative ">
            <FaShoppingBag />
            <span
              className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white font-semibold text-sm
            absolute -top-2 -right-2"
            >
              2
            </span>
          </div>
          {/* login, signup */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              className="bg-customPurple dark:bg-purple-800 text-white rounded-lg   px-4 py-2 text-sm"
            >
              Login
            </Link>
          </div>
          <ThemeSwitcher />
          <ToggleMenuButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
