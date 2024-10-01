"use client"; // Ensure this component is treated as a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { link: "/", label: "Home" },
  { link: "/courses", label: "Courses" },
  { link: "/events", label: "Events" },
  { link: "/blog", label: "Blog" },
  { link: "/contact", label: "Contact" },
];

const NavLinks = () => {
  const currentPath = usePathname();

  const renderNavLinks = navLinks.map(({ link, label }) => (
    <li key={link}>
      <Link
        href={link}
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
        absolute left-0 top-20 w-full shadow-xl px-4
        lg:flex-row  lg:w-auto lg:relative lg:top-0 lg:mt-0 lg:shadow-none lg:px-0
    bg-lightGray lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
    >
      {renderNavLinks}
    </ul>
  );
};

export default NavLinks;
