import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ShoppingCartIcon = () => {
  return (
    <div className=" w-8 h-8 rounded-full ring-2 ring-gray-300 flex items-center justify-center cursor-pointer relative ">
      <FaShoppingBag />
      <span
        className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white font-semibold text-sm
            absolute -top-2 -right-2"
      >
        2
      </span>
    </div>
  );
};

export default ShoppingCartIcon;
