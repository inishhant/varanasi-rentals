import Navbar from "../components/Navbar"
import HeroCarousel from "../components/HeroCarousel"
import FeaturedBikes from "../components/FeaturedBikes"
import AboutSection from "../components/AboutSection"
import Reviews from "../components/Reviews"
import Footer from "@/components/Footer"
import WhyChooseUs from "@/components/WhyChooseUs"
import HowItWorks from "@/components/HowItWorks"

export default function Home() {
  return (
    <>
      <HeroCarousel/>
      <HowItWorks />
      <FeaturedBikes/>
      <WhyChooseUs />
      <Reviews/>
    </>
  )
}