import Navbar from "../../components/Navbar"

export default function Booking() {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Book Your Ride
        </h1>

        <form className="flex flex-col gap-4">

          <input
            placeholder="Name"
            className="border p-3 rounded"
          />

          <input
            placeholder="Phone"
            className="border p-3 rounded"
          />

          <input
            type="date"
            className="border p-3 rounded"
          />

          <button className="bg-ganga text-white p-3 rounded">
            Confirm Booking
          </button>

        </form>

      </div>

    </>
  )
}