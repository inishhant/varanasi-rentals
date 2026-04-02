import Link from "next/link"

export default function BikeCard({ bike }) {
  return (
    <div className="bg-white rounded-[2rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-primaryLight/30 flex flex-col h-full group">

      {/* Bike Image with Badge */}
      <div className="relative overflow-hidden rounded-3xl mb-4 group-hover:scale-[1.02] transition-transform duration-300">
        <Link href={`/bikes/${bike.id}`}>
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-56 object-cover bg-bgSubtle"
          />
        </Link>
        <div className="absolute top-4 left-4 bg-accentLime text-primaryDark text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
          {bike.type || "Scooter"}
        </div>
      </div>

      <div className="flex-1 flex flex-col px-2">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/bikes/${bike.id}`}>
            <h2 className="text-2xl text-gray-900 font-extrabold line-clamp-1 hover:text-primary transition-colors">
              {bike.name}
            </h2>
          </Link>
        </div>

        <p className="text-xl text-primary font-semibold mb-6">
          ₹{bike.price}<span className="text-sm font-normal text-gray-500">/day</span>
        </p>

        {/* Booking Button */}
        <div className="mt-auto">
          <Link href={`/bookMyRide?bike=${bike.id}`}>
            <button className="w-full bg-primaryDark text-white font-bold px-6 py-4 rounded-full transition-all duration-300 hover:bg-primary shadow-lg shadow-primaryDark/30 hover:shadow-primary/50 text-lg">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}