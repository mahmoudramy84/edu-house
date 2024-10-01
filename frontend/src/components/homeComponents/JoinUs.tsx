import React from "react";
import { ButtonLink, SectionHeader } from "../common";

const JoinUs = () => {
  return (
    <section className="py-16 bg-lightGray dark:bg-gray-900 ">
      <div className="container mx-auto text-center">
        <SectionHeader
          title="Find the right learning path for you"
          description="Match your goals to our programs, explore your options, and map out your path to success."
        />

        <ButtonLink href="#" addMargin={true} withoutBg={true}> Get Started Now</ButtonLink>
      </div>
    </section>
  );
};

export default JoinUs;
