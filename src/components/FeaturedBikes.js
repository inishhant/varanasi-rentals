"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import {bikes} from "@/data/bikes"

import "swiper/css"

import BikeCard from "./BikeCard"

export default function FeaturedBikes() {

  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <section className="py-12 px-10 bg-bgSubtle relative overflow-visible">

      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Popular Bikes
      </h2>

      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        className="overflow-visible"
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >

        {bikes.map((bike, i) => (
          <SwiperSlide key={i}>
            <BikeCard bike={bike} />
          </SwiperSlide>
        ))}

      </Swiper>

      {/* PREV BUTTON */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primaryDark hover:bg-primary text-white p-3 rounded-full backdrop-blur transition-colors"
      >
        <FaChevronLeft />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={() => swiperRef?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primaryDark hover:bg-primary text-white p-3 rounded-full backdrop-blur transition-colors"
      >
        <FaChevronRight />
      </button>

    </section>
  )
}