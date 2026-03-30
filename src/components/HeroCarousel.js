"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import Link from "next/link"

export default function HeroCarousel() {

  const [swiperRef, setSwiperRef] = useState(null)

  const slides = [
    {
      img: "/images/ghat1.jpg",
      title: "Explore Varanasi on Wheels",
      subtitle: "Ride through the ancient streets and ghats"
    },
    {
      img: "/images/ghat2.jpg",
      title: "Affordable Bike Rentals",
      subtitle: "Daily & weekly rentals available"
    },
    {
      img: "/images/bike1.png",
      title: "Premium Bikes Available",
      subtitle: "Royal Enfield, R15, Activa & more"
    },
    {
      img: "/images/ghat3.jpg",
      title: "Discover Hidden Places",
      subtitle: "Travel freely across Varanasi"
    },
    {
      img: "/images/ghat4.jpg",
      title: "Easy Online Booking",
      subtitle: "Book your ride in seconds"
    }
  ]

  return (
    <div className="w-full h-[80vh] relative">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        onSwiper={setSwiperRef}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="h-full"
      >

        {slides.map((slide, i) => (
          <SwiperSlide key={i}>

            <div
              className="h-[80vh] bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >

              {/* overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* content */}
              <div className="relative text-white text-center px-6">

                <h1 className="text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg md:text-xl">
                  {slide.subtitle}
                </p>

                <button className="mt-6 bg-temple hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
                    <Link href="/bookMyRide">Book Your Ride</Link>
                </button>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* PREV BUTTON */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white backdrop-blur"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={() => swiperRef?.slideNext()}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white backdrop-blur"
      >
        <FaChevronRight size={20} />
      </button>

    </div>
  )
}