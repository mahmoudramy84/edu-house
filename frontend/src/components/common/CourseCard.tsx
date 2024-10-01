import { TCourse } from "@/types/courseType";
import Image from "next/image";
import React from "react";
import { FaCartPlus, FaRegStar, FaStar } from "react-icons/fa";

const CourseCard = ({ course }: { course: TCourse }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4">
      <Image
        src={course.imageUrl}
        alt={course.title}
        width={500}
        height={300}
        className="w-full h-32 object-cover mb-4"
      />

      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

      <div className="flex justify-between items-center mb-2 text-gray-600 dark:text-gray-400">
        <span>{course.hours}</span>
        <span>{course.lessons} lessons</span>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold text-customPurple dark:text-white">
          {course.price}
        </span>
        <div className="flex items-center">
          <Image
            src={course.instructor.imageUrl}
            alt={course.instructor.name}
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          <span className="text-gray-600 dark:text-gray-300">
            {course.instructor.name}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-yellow-500 flex items-center">
          {Array.from({ length: 5 }, (_, index) =>
            index < Math.floor(course.rating) ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} />
            )
          )}
        </span>
        <span className="text-gray-600 dark:text-gray-300">{course.level}</span>
      </div>

      <button className="flex items-center justify-center bg-customPurple text-white rounded-lg py-2 hover:bg-purple-600 transition-all w-full mt-4">
        <FaCartPlus className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
};

export default CourseCard;
