import { FaMotorcycle, FaCalendarCheck, FaMapMarkedAlt } from "react-icons/fa"

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaMotorcycle className="text-4xl text-white" />,
      title: "1. Pick Your Ride",
      desc: "Browse our extensive fleet of scooters and cruisers to find your perfect match.",
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-white" />,
      title: "2. Book Online",
      desc: "Select your dates and locations, then easily verify with OTP and ID proof.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-white" />,
      title: "3. Explore Kashi",
      desc: "Pick up your keys and ride freely through the beautiful ghats and streets.",
    }
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Renting Made Simple
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Get on the road in just three easy steps. We value your time as much as you do.
          </p>
        </div>

        <div className="flex flex-col md:flex-row relative gap-12 md:gap-6 justify-between items-center text-center">
          
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[40%] left-[10%] w-[80%] h-1 border-t-2 border-dashed border-primaryLight -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white z-10 p-6 md:w-1/3">
              <div className="w-24 h-24 bg-gradient-to-tr from-primaryDark to-primary rounded-full flex justify-center items-center shadow-lg shadow-primaryDark/30 mb-8 transform transition hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
