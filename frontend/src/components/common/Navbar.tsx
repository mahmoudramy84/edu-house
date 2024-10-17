"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Search from "./Search";
import ShoppingCartIcon from "./ShoppingCartIcon";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import {  useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-lg dark:shadow-none">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-12">
        {/* logo */}
        <Link
          href="/"
          className="flex flex-1 items-center space-x-3 rtl:space-x-reverse mx-auto mb-5 sm:mb-0 sm:m-0 "
        >
          <Image src="" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </span>
        </Link>

        <div
          className={`w-full ${
            isOpen ? "block" : "hidden"
          } xl:block xl:w-auto flex-1`}
        >
          <NavLinks handleLinkClick={handleLinkClick} />
        </div>

        <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto justify-between sm:justify-end">
          <Search />
          <ShoppingCartIcon />

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

          <button
            className="flex items-center justify-center p-2 w-10 h-10  
      text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none 
      dark:text-gray-400 dark:hover:bg-gray-700 "
            onClick={handleToggleMenu}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
