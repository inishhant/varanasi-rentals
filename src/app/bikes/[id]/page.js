import BikeDetails from "@/components/BikeDetails"
import { bikes } from "@/data/bikes"

export default async function Bike({ params }) {
    const { id } = await params

    const bike = bikes.find((b) => b.id === id)

    if (!bike) {
        return <div className="p-20 text-center text-xl">Bike not found</div>
    }

  return (
    // <div className="max-w-6xl mx-auto px-6 py-12">

    //   <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow">

    //     {/* Bike Image */}
    //     <div>
    //       <img
    //         src={bike.image}
    //         className="w-full h-[400px] object-cover rounded-xl"
    //       />
    //     </div>

    //     {/* Bike Info */}
    //     <div>

    //       <h1 className="text-4xl font-bold text-black">
    //         {bike.name}
    //       </h1>

    //       <p className="text-2xl text-temple font-semibold mt-2">
    //         ₹{bike.price} / day
    //       </p>

    //       <div className="mt-6 space-y-3 text-gray-700">

    //         <p><b>Type:</b> {bike.type}</p>
    //         <p><b>Engine:</b> {bike.engine}</p>
    //         <p><b>Mileage:</b> {bike.mileage}</p>

    //       </div>

    //       <button className="mt-8 bg-temple text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
    //         Book This Bike
    //       </button>

    //     </div>

    //   </div>

    // </div>
    <BikeDetails bike={bike} bookButton={true}/>
  )
}