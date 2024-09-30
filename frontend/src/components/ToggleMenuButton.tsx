import React from "react";
import { FaBars } from "react-icons/fa";

const ToggleMenuButton = () => {
  return (
    <button
      className="flex items-center justify-center p-2 w-10 h-10  
      text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none 
      dark:text-gray-400 dark:hover:bg-gray-700 "
    >
      <FaBars />
    </button>
  );
};

export default ToggleMenuButton;
