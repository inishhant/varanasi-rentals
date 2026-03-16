"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import "swiper/css"

import BikeCard from "./BikeCard"

const bikes = [
  {
    name: "Royal Enfield Meteor 350",
    price: 1200,
    image: "/images/bike1.png"
  },
  {
    name: "Honda Activa",
    price: 500,
    image: "/images/bike2.png"
  },
  {
    name: "Royal Enfield Classic 350",
    price: 1100,
    image: "/images/bike3.png"
  },
  {
    name: "Honda Activa",
    price: 500,
    image: "/images/bike2.png"
  },
  {
    name: "Yamaha R15",
    price: 900,
    image: "/images/bike3.png"
  }
]

export default function FeaturedBikes() {

  const [swiperRef, setSwiperRef] = useState(null)

  return (
    <section className="py-12 px-10 bg-gray-50 relative overflow-visible">

      <h2 className="text-3xl font-bold text-center mb-10 text-black">
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
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-400 text-white p-3 rounded-full backdrop-blur"
      >
        <FaChevronLeft />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={() => swiperRef?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-400 text-white p-3 rounded-full backdrop-blur"
      >
        <FaChevronRight />
      </button>

    </section>
  )
}