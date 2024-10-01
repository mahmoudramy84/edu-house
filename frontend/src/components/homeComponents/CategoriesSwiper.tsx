"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";


const CategoriesSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          997: {
            slidesPerView: 4,
          },
          1535: {
            slidesPerView: 6,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard
              id={category.id}
              title={category.title}
              Icon={category.Icon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
     
    </>
  );
};

export default CategoriesSwiper;
