export default function BikeCard({ bike }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow transition-all duration-300 hover:border-temple hover:shadow-lg">

      <img src={bike.image} className="rounded" />

      <h2 className="text-xl text-black font-bold mt-2">
        {bike.name}
      </h2>

      <p className="text-ganga">
        ₹{bike.price}/day
      </p>

      <button className="mt-2 bg-temple text-white px-4 py-2 rounded transition-all duration-300 hover:bg-orange-600 hover:shadow-md">
        Book Now
      </button>

    </div>
  )
}