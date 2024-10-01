import { SectionHeader } from "../common";
import CategoriesSwiper from "./CategoriesSwiper";

const TopCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <SectionHeader
          title={"Top Categories"}
          description=" Explore our most popular categories and start your learning journey
          today!"
        />
        <CategoriesSwiper />
      </div>
    </section>
  );
};

export default TopCategories;
