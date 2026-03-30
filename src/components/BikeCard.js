import Link from "next/link"

export default function BikeCard({ bike }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow transition-all duration-300 hover:border-temple hover:shadow-lg">

      {/* Bike Details Link */}
      <Link href={`/bikes/${bike.id}`}>

        <img
          src={bike.image}
          className="rounded-lg w-full h-48 object-cover"
        />

        <h2 className="text-xl text-black font-bold mt-3">
          {bike.name}
        </h2>

        <p className="text-ganga">
          ₹{bike.price}/day
        </p>

      </Link>

      {/* Booking Button */}
      <Link href={`/bookMyRide?bike=${bike.id}`}>

        <button className="mt-3 bg-temple text-white px-4 py-2 rounded transition-all duration-300 hover:bg-orange-600 hover:shadow-md">
          Book Now
        </button>

      </Link>

    </div>
  )
}