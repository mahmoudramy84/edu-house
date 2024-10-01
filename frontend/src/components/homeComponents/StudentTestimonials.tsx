'use client'

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { SectionHeader } from "../common";

const StudentTestimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "This course was amazing! I learned so much and the instructors were very helpful.",
      imageUrl: "/images/instructors_images/instructor_2.jpg",
    },
    {
      name: "John Smith",
      feedback: "Great content and well-structured. I feel more confident in my skills now!",
      imageUrl: "/images/instructors_images/instructor_2.jpg",
    },
    {
      name: "Alice Johnson",
      feedback: "I loved the hands-on approach. It made learning so much easier!",
      imageUrl: "/images/instructors_images/instructor_2.jpg",
    },
   
  ];

  return (
    <section className="py-16 bg-lightGray dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <SectionHeader title='What Our Students Have To Say' description="Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id dolor."/>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={200}
                height={200}
                className="w-24 h-24 rounded-full mb-4 object-cover mx-auto"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {testimonial.feedback}
              </p>
              <h3 className="text-lg font-semibold text-customPurple">
                {testimonial.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentTestimonials;
