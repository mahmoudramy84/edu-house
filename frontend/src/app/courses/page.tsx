import { CourseCard, SectionHeader } from "@/components/common";
import {
  CategoryFilter,
  InstructorsFilter,
  LevelFilter,
  RatingFilter,
} from "@/components/coursesComponents";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { IoIosArrowDown } from "react-icons/io";

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

const Courses = () => {
  const renderCourses = courses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ));

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="mb-12">
          <SectionHeader
            title="Courses"
            description="Write an introductory description of the category."
            isCenter={true}
          />
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* filter section */}
          <div className="col-span-12 lg:col-span-3">
            <Disclosure as="div" className="p-6 border-b-2" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Category
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                {/* category filter */}
                <CategoryFilter />
              </DisclosurePanel>
            </Disclosure>

            {/* rating filter */}
            <Disclosure as="div" className="p-6 border-b-2 " defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Ratings
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                <RatingFilter />
              </DisclosurePanel>
            </Disclosure>

            {/* instructors filter */}
            <Disclosure as="div" className="p-6 border-b-2 " defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Instructors
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                {/* category filter */}
                <InstructorsFilter />
              </DisclosurePanel>
            </Disclosure>

            {/* level filter */}
            <Disclosure as="div" className="p-6 " defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-2xl font-medium  text-black dark:text-white dark:group-data-[hover]:text-white/80">
                  Level
                </span>
                <IoIosArrowDown className="size-5 dark:fill-white/60 dark:group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-6 text-sm/5 dark:text-white/50 space-y-3">
                {/* category filter */}
                <LevelFilter />
              </DisclosurePanel>
            </Disclosure>
          </div>

          {/* courses section */}
          <div className="col-span-12 lg:col-span-9 p-6">
            <div className="mb-4">
              Showing
              <span>7</span>
              total results
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {renderCourses}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
