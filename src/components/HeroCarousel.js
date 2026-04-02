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
              className="h-[80vh] bg-cover bg-center relative flex items-end justify-start pb-20 pl-8 md:pl-24"
              style={{ backgroundImage: `url(${slide.img})` }}
            >

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* content */}
              <div className="relative z-10 text-left max-w-2xl transform transition-all mb-4 md:mb-8 pb-4">

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-white">
                  {slide.title}
                </h1>

                <p className="text-sm md:text-base font-medium text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-6 max-w-lg leading-relaxed">
                  {slide.subtitle}
                </p>

                <Link href="/bookMyRide">
                  <button className="bg-primaryDark text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-primary hover:text-gray-900 shadow-lg hover:scale-105 hover:shadow-primary/50 text-sm md:text-base tracking-wide border-2 border-transparent hover:border-white/50">
                    Book Your Ride Now
                  </button>
                </Link>

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