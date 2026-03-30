// import Layout from "@/app/layout"
import BikeCard from "../../components/BikeCard"
import { bikes } from "@/data/bikes"

export default function Bikes() {
  return (
    <>
      {/* <Layout> */}
        {/* Hero Header */}
        <div className="bg-gray-100 py-16 text-center">

          <h1 className="text-4xl font-bold text-black">
            Choose Your Ride
          </h1>

          <p className="text-gray-600 mt-3">
            Explore the streets of Varanasi with our premium bike rentals
          </p>

        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">

            {/* Search */}
            <input
              type="text"
              placeholder="Search bikes..."
              className="w-full md:w-3/5 px-4 py-2 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-temple focus:border-temple 
              text-black placeholder-gray-400 transition"
            />

            {/* Category */}
            <select
              className="w-full md:w-1/5 px-4 py-2 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-temple focus:border-temple 
              text-black bg-white transition"
            >
              <option>All Bikes</option>
              <option>Scooter</option>
              <option>Sports</option>
              <option>Royal Enfield</option>
            </select>

            {/* Price Sort */}
            <select
              className="w-full md:w-1/5 px-4 py-2 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-temple focus:border-temple 
              text-black bg-white transition"
            >
              <option>Price</option>
              <option>Low → High</option>
              <option>High → Low</option>
            </select>

          </div>

        </div>

        {/* Bikes Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-16">

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {bikes.map((bike, index) => (
              <BikeCard bike={bike} key={index} />
            ))}

          </div>

        </div>
      {/* </Layout> */}

    </>
  )
}