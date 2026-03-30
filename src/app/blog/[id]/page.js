const blogContent = {
  "ghat-ride": {
    title: "Best Bike Routes in Varanasi",
    content: "Ride along Assi Ghat, Dashashwamedh Ghat and enjoy sunrise views..."
  },
  "temple-tour": {
    title: "Top Temples to Visit on a Bike",
    content: "Visit Kashi Vishwanath, Sankat Mochan and more..."
  },
  "travel-tips": {
    title: "Bike Rental Tips for Beginners",
    content: "Always carry license, check fuel, inspect brakes..."
  }
}

export default function BlogDetails({ params }) {

  const blog = blogContent[params.id]

  if (!blog) {
    return <div className="p-10">Blog not found</div>
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-black mb-6">
          {blog.title}
        </h1>

        <p className="text-gray-700 leading-7">
          {blog.content}
        </p>

      </div>
    </>
  )
}