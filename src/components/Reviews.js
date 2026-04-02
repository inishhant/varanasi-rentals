"use client"

import { FaStar } from "react-icons/fa"
import { useEffect, useState, useRef } from "react"

const ALL_REVIEWS = [
  { name: "Rahul S.", text: "Amazing experience renting a cruiser. Rode all the way to Sarnath without a single hiccup." },
  { name: "Sarah M.", text: "The scooters were practically brand new! Very smooth process and great staff." },
  { name: "Amit K.", text: "Perfect for exploring the narrow lanes near the ghats. Highly recommended!" },
  { name: "Jessica T.", text: "Super affordable rates and no hidden fees. Definitely the best in Varanasi." },
  { name: "Vikram P.", text: "Rented an Activa for 3 days. The pickup and drop-off was completely seamless." },
  { name: "Daniel K.", text: "Excellent customer service. They even provided two sanitized helmets." },
  { name: "Priya V.", text: "The Royal Enfield was in pristine condition. Ascending the ghats was a breeze!" },
  { name: "Rohan D.", text: "Five stars! Instant booking and helpful guides who suggested great food spots." },
  { name: "Michael B.", text: "A must-do if you visit Kashi. Riding freely at sunrise is magical." },
  { name: "Neha C.", text: "Smooth engines, great mileage. We toured every temple without getting tired." },
  { name: "Anil R.", text: "No paperwork hassle. Used Aadhar and was on the road in five minutes." },
  { name: "Emma H.", text: "Very professional team. They respond to WhatsApp inquiries instantly." },
  { name: "Kunal M.", text: "We took two scooters. Both ran perfectly for our entire week-long stay." },
  { name: "Suresh N.", text: "Best way to beat the Varanasi traffic. The bikes are well maintained." },
  { name: "Laura W.", text: "Felt very safe as a solo female traveler renting from them. Great folks." },
  { name: "Manish L.", text: "Cheaper than cabs and way more fun. You can park anywhere easily." },
  { name: "Tara B.", text: "The Meteor 350 was a dream to ride. Very comfortable suspension for the bumpy roads." },
  { name: "Gaurav H.", text: "Top notch rental service. Will definitely use them again next year." },
  { name: "Olivia S.", text: "Loved being able to stop wherever we wanted for chai. Great scooters." },
  { name: "Nitin A.", text: "Transparent pricing. Deposit was returned immediately upon drop-off." },
  { name: "Pooja D.", text: "Absolutely loved the experience! Highly suggest renting a bike here." },
  { name: "Arjun K.", text: "The brakes and tyres were properly checked before handing over. Safety first!" },
  { name: "Sneha R.", text: "Awesome service. Took an Activa to Ramnagar Fort, ran perfectly." },
  { name: "Chris J.", text: "Great pricing for weekly rentals. The vehicles look fresh and clean." },
  { name: "Deepak T.", text: "Support team was fantastic when we got confused about the route back." },
  { name: "Anita S.", text: "Rented bikes for our whole family. We had a memorable ride along the Ganges." },
  { name: "Karan Y.", text: "Hassle-free return policy. Kashi Ride Rentals is the way to go." },
  { name: "Elena F.", text: "Booking online was so easy and the OTP verification works like a charm!" },
  { name: "Ravi G.", text: "Impeccable condition. You can tell they service their fleet regularly." },
  { name: "Maya P.", text: "The best local transport option. Don't think twice, just book here." },
  { name: "Sunil W.", text: "Very friendly owners who give you the best tips for Varanasi touring." },
  { name: "Zoya N.", text: "A fantastic ride. The scooter was lightweight and easy to handle in traffic." },
  { name: "Rajesh O.", text: "Great condition! Made visiting Sankat Mochan very fast and simple." }
]

function ReviewCard({ r }) {
  const seed = r.name.replace(" ", "")
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img 
          src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${seed}`} 
          className="w-12 h-12 rounded-full border border-gray-200 bg-bgSubtle" 
          alt={r.name}
        />
        <div>
          <p className="font-bold text-gray-900">{r.name}</p>
          <div className="flex text-accentLime drop-shadow-sm text-sm mt-1">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
        "{r.text}"
      </p>
    </div>
  )
}

function ScrollColumn({ reviews, speed, reverse = false, className = "" }) {
  const colRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let animationFrameId;

    if (reverse && colRef.current && colRef.current.scrollTop === 0) {
       // Pre-scroll for reverse downward direction so it doesn't bounce at top immediately
       colRef.current.scrollTop = colRef.current.scrollHeight / 2;
    }

    const scroll = () => {
      if (!isHovered && colRef.current) {
        const { scrollTop, scrollHeight } = colRef.current;
        
        if (!reverse) {
          colRef.current.scrollTop += speed;
          if (scrollTop >= scrollHeight / 2) {
            colRef.current.scrollTop = 0;
          }
        } else {
          colRef.current.scrollTop -= speed;
          if (scrollTop <= 0) {
             colRef.current.scrollTop = scrollHeight / 2;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, speed, reverse])

  return (
    <div 
      ref={colRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className={`flex flex-col gap-6 h-[600px] md:h-[800px] overflow-y-auto no-scrollbar ${className}`}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {[...reviews, ...reviews, ...reviews].map((r, i) => (
        <ReviewCard r={r} key={`col-${i}`} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [selectedReviews, setSelectedReviews] = useState([])

  useEffect(() => {
    // Shuffle and pick 20
    const shuffled = [...ALL_REVIEWS].sort(() => 0.5 - Math.random())
    setSelectedReviews(shuffled.slice(0, 20))
  }, [])

  if (selectedReviews.length === 0) return null

  // Split into 3 columns
  const col1 = selectedReviews.slice(0, 7)
  const col2 = selectedReviews.slice(7, 14)
  const col3 = selectedReviews.slice(14, 20)

  return (
    <section className="bg-bgSubtle py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Wall of Love
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what hundreds of happy riders have to say about exploring Kashi with us.
          </p>
        </div>

        <div className="relative flex gap-6 justify-center overflow-hidden w-full lg:max-w-6xl mx-auto" 
             style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
          
          <ScrollColumn reviews={col1} speed={1} className="w-full md:flex-1" />
          <ScrollColumn reviews={col2} speed={1} reverse={true} className="hidden md:flex w-full md:flex-1" />
          <ScrollColumn reviews={col3} speed={0.8} className="hidden lg:flex w-full md:flex-1" />

        </div>

      </div>
    </section>
  )
}