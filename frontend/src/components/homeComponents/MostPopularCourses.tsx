import React, { useMemo } from "react";
import { SectionHeader } from "../common";
import { categories } from "@/data/categories";

const MostPopularCourses = () => {
  const renderCategories = useMemo(() => {
    return categories.slice(0, 6).map((category) => (
      <li key={category.id} className="flex flex-nowrap">
        <button
          type="button"
          className="rounded-lg bg-lightGray dark:bg-gray-900
      transition-all dark:hover:bg-purple-800 px-4 py-2 whitespace-nowrap"
          aria-label={`View courses in ${category.title}`}
        >
          {" "}
          {category.title}
        </button>
      </li>
    ));
  }, [categories]);
  return (
    <section className="pb-16 overflow-hidden">
      <div className="container mx-auto text-center">
        <SectionHeader
          title={"Our Most Popular Courses"}
          description="10,000+ unique online course list designs"
        />

          <ul className="flex items-center gap-4 flex-wrap justify-center">
            {renderCategories}
          </ul>


{/* courses cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4"></div>



      </div>
    </section>
  );
};

export default MostPopularCourses;
