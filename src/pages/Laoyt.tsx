import { Outlet, Link } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold text-gray-800">PerfectPlace</div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link  to="/Crud">Crud</Link>
          <a href="#" className="hover:text-green-500">Contact</a>

        </div>
        
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}