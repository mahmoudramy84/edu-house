import { categories } from "@/data/categories";
import React from "react";

const CategoryFilter = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="category"
            id="category-all"
            value="all"
            className="h-5 w-5 min-w-5 min-h-5 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
          />{" "}
          <label htmlFor="category-all" className="text-lg font-normal">
            All
          </label>
        </div>
        <div>(12)</div>
      </div>

      {categories.map((category) => {
        const modifiedId = category.title
          .toLowerCase()
          .replace("&", "")
          .replace(/\s+/g, "-");
        return (
          <>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="category"
                  id={`category-${modifiedId}`}
                  value={category.id}
                  className="h-5 w-5 min-w-5 min-h-5 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />{" "}
                <label
                  htmlFor={`category-${modifiedId}`}
                  className="text-lg font-normal dark:text-gray-400"
                >
                  {category.title}
                </label>
              </div>
              <div>(12)</div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CategoryFilter;
