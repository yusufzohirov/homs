export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-3xl shadow-sm mb-16">
        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" className="w-full md:w-1/2 h-72 object-cover rounded-2xl" />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Dandelion Hotel</h1>
          <p className="text-yellow-500 mb-4">★★★★★</p>
          <p className="text-gray-500 mb-6">A wonderful place to stay with beautiful views and top-notch facilities. Perfect for your vacation.</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Book Now</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about our hotels.</p>
        </div>
        <div className="md:w-2/3 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-800">How do I make a reservation?</h4>
            <p className="text-gray-500 text-sm mt-2">You can book directly on our website by selecting your dates and choosing a room.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-800">What are the check-in times?</h4>
            <p className="text-gray-500 text-sm mt-2">Check-in starts at 2:00 PM, and check-out is at 11:00 AM.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-green-50 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide the best hotel booking experience. Our goal is to help you find your perfect place to stay wherever you go.
        </p>
      </div>

    </div>
  );
}