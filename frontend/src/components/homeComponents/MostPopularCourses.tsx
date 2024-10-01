import React, { useMemo } from "react";
import { CourseCard, SectionHeader } from "../common";
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
  }, []);

  const renderCourses = useMemo(() => {
    const courses = [
      {
        id: "1",
        title: "Learn React from Scratch",
        imageUrl: "/images/courses_images/course_1.webp",
        hours: "30 hours",
        lessons: 25,
        price: "$49.99",
        instructor: {
          name: "John Doe",
          imageUrl: "/images/instructors_images/instructor_2.jpg",
        },
        rating: 4.5,
        level: "Intermediate",
      },
      {
        id: "2",
        title: "Learn React from Scratch",
        imageUrl: "/images/courses_images/course_1.webp",
        hours: "30 hours",
        lessons: 25,
        price: "$49.99",
        instructor: {
          name: "John Doe",
          imageUrl: "/images/instructors_images/instructor_2.jpg",
        },
        rating: 4.5,
        level: "Intermediate",
      },
      {
        id: "3",
        title: "Learn React from Scratch",
        imageUrl: "/images/courses_images/course_1.webp",
        hours: "30 hours",
        lessons: 25,
        price: "$49.99",
        instructor: {
          name: "John Doe",
          imageUrl: "/images/instructors_images/instructor_2.jpg",
        },
        rating: 4.5,
        level: "Intermediate",
      },
      {
        id: "4",
        title: "Learn React from Scratch",
        imageUrl: "/images/courses_images/course_1.webp",
        hours: "30 hours",
        lessons: 25,
        price: "$49.99",
        instructor: {
          name: "John Doe",
          imageUrl: "/images/instructors_images/instructor_2.jpg",
        },
        rating: 4.5,
        level: "Intermediate",
      },
    ];
    return courses
      .slice(0, 6)
      .map((course) => <CourseCard key={course.id} course={course} />);
  }, []);

  return (
    <section className="pb-16 overflow-hidden">
      <div className="container mx-auto text-center">
        <SectionHeader
          title={"Our Most Popular Courses"}
          description="10,000+ unique online course list designs"
        />

        <ul className="flex items-center gap-4 flex-wrap justify-center mb-10">
          {renderCategories}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 gap-8">
          {renderCourses}
        </div>
      </div>
    </section>
  );
};

export default MostPopularCourses;
