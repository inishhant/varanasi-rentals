import { FaShieldAlt, FaHeadset, FaTools } from "react-icons/fa"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-primaryDark" />,
      title: "Premium & Safe",
      desc: "All our rides are strictly maintained and sanitized for a pristine experience.",
      bgColor: "bg-accentLime"
    },
    {
      icon: <FaTools className="text-3xl text-primaryDark" />,
      title: "24/7 Support",
      desc: "Hit a bump? We provide on-road assistance round the clock across Varanasi.",
      bgColor: "bg-accentBlue"
    },
    {
      icon: <FaHeadset className="text-3xl text-primaryDark" />,
      title: "Instant Booking",
      desc: "Skip the waiting. Our seamless online verification puts you on the road globally.",
      bgColor: "bg-primaryLight"
    }
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-bgSubtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Kashi Ride Rentals?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant spirit of Varanasi with the utmost comfort and reliability. We are more than just a rental—we are your travel partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
