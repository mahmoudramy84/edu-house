"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { link: "/", label: "Home" },
  { link: "/courses", label: "Courses" },
  { link: "/events", label: "Events" },
  { link: "/blog", label: "Blog" },
  { link: "/contact", label: "Contact" },
];

type TNavLinksProps = {
  handleLinkClick: () => void;
};
const NavLinks = ({ handleLinkClick }: TNavLinksProps) => {
  const currentPath = usePathname();

  const renderNavLinks = navLinks.map(({ link, label }) => (
    <li key={link}>
      <Link
        href={link}
        onClick={handleLinkClick}
        className={`block py-2 px-3 rounded  transition-colors duration-300 
          ${
            currentPath === link
              ? "bg-lightGray text-blue-700 dark:bg-customPurple dark:text-white"
              : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          } 
        `}
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <ul
      className="font-medium flex flex-col rounded-lg rtl:space-x-reverse 
        absolute left-0 top-20 w-full shadow-xl px-4 py-4 
        xl:flex-row  xl:w-auto xl:relative xl:top-0 xl:mt-0 xl:shadow-none xl:px-0 xl:py-0
    bg-lightGray xl:bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      {renderNavLinks}
    </ul>
  );
};

export default NavLinks;
