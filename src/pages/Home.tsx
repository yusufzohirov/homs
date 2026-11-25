export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Find your perfect <br /> place to stay
          </h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="flex items-center gap-2 text-green-600 font-semibold">
            ▶ Watch video
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="House" 
            className="rounded-3xl shadow-xl w-full object-cover h-[400px]"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Our most popular Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">The Royal Hotel</h3>
              <p className="text-gray-500 text-sm">Miami, USA</p>
              <p className="text-green-500 font-bold mt-2">$120 / night</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Mountain View</h3>
              <p className="text-gray-500 text-sm">Denver, USA</p>
              <p className="text-green-500 font-bold mt-2">$150 / night</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">Modern Villa</h3>
              <p className="text-gray-500 text-sm">California, USA</p>
              <p className="text-green-500 font-bold mt-2">$200 / night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}