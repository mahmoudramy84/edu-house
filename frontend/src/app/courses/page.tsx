import { SectionHeader } from "@/components/common";
import { CategoryFilter, InstructorsFilter, LevelFilter, RatingFilter } from "@/components/coursesComponents";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { IoIosArrowDown } from "react-icons/io";

const Courses = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* filter section */}
          <div className="">
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
                <LevelFilter/>
              </DisclosurePanel>
            </Disclosure>












          </div>

          {/* courses section */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
