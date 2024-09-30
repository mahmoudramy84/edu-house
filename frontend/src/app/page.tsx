import {
  Landing,
  MostPopularCourses,
  TopCategories,
  WhyChooseUs,
} from "@/components/homeComponents";

export default function Home() {
  return (
    <>
      <Landing />
      <TopCategories />
      <MostPopularCourses />
      <WhyChooseUs/>
    </>
  );
}
