import CategoriesSwiper from "./CategoriesSwiper";

const TopCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Top Categories</h2>
        <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">
          Explore our most popular categories and start your learning journey
          today!
        </p>
        <CategoriesSwiper />


      </div>
    </section>
  );
};

export default TopCategories;
