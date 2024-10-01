import {
  BecomeAStudentOrInstructor,
  BestInstructors,
  JoinUs,
  Landing,
  MostPopularCourses,
  TopCategories,
  UpcomingEvents,
  WhyChooseUs,
} from "@/components/homeComponents";

export default function Home() {
  return (
    <>
      <Landing />
      <TopCategories />
      <MostPopularCourses />
      <WhyChooseUs/>
      <BestInstructors/>
      <BecomeAStudentOrInstructor/>
      <JoinUs/>
      <UpcomingEvents/>
    </>
  );
}
