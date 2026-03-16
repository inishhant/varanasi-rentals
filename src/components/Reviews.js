import { FaStar } from "react-icons/fa"

export default function Reviews() {

  const reviews = [
    {
      name: "Rahul",
      review: "Amazing experience renting a bike in Varanasi!"
    },
    {
      name: "Sarah",
      review: "Very smooth process and great bikes."
    },
    {
      name: "Amit",
      review: "Perfect for exploring the ghats."
    }
  ]

  return (
    <section className="bg-gray-100 py-16 px-10">

      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {reviews.map((r,i)=>(
          <div key={i} className="bg-white p-6 rounded-xl shadow">

            <div className="flex text-yellow-400 mb-2">
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>

            <p className="text-gray-600">
              "{r.review}"
            </p>

            <p className="mt-4 font-semibold text-black">
              - {r.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}