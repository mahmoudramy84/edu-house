import {
  Landing,
  MostPopularCourses,
  TopCategories,
} from "@/components/homeComponents";

export default function Home() {
  return (
    <>
      <Landing />
      <TopCategories />
      <MostPopularCourses />
    </>
  );
}
