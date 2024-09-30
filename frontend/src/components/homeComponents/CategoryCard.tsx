import { TCategory } from "@/types/categoryType";
import React from "react";

const CategoryCard = ({ title, Icon }: TCategory) => {
  return (
    <div
      className="bg-lightGray dark:bg-gray-900 dark:text-white
                flex flex-col items-center justify-center space-y-4 p-6 rounded-lg
                w-[100%]
                
                "
    >
      <div
        className="bg-white rounded-full w-[80px] h-[80px] flex items-center justify-center 
    "
      >
        <Icon className="text-2xl text-customPurple" />
      </div>
      <div className="text-lg ">{title}</div>
      <div className="text-gray-700 dark:text-white text-[13px] flex flex-col">
        <span>908+</span> Courses
      </div>
    </div>
  );
};

export default CategoryCard;
