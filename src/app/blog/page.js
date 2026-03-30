import Link from "next/link"

const blogs = [
  {
    id: "ghat-ride",
    title: "Best Bike Routes in Varanasi",
    desc: "Explore scenic ghats and hidden streets on your bike ride.",
    image: "/images/ghat1.jpg"
  },
  {
    id: "temple-tour",
    title: "Top Temples to Visit on a Bike",
    desc: "Cover Kashi Vishwanath and more in one smooth ride.",
    image: "/images/ghat2.jpg"
  },
  {
    id: "travel-tips",
    title: "Bike Rental Tips for Beginners",
    desc: "Everything you need before renting your first bike.",
    image: "/images/bike1.png"
  }
]

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-r from-temple to-orange-500 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Kashi Travel Blogs
        </h1>
        <p className="mt-3 text-lg">
          Explore Varanasi like never before
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border hover:border-temple"
          >

            <img
              src={blog.image}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-bold text-black">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {blog.desc}
              </p>

              <Link href={`/blog/${blog.id}`}>
                <button className="mt-4 bg-temple text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                  Read More
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>
    </>
  )
}