import { Link, Outlet } from "react-router-dom";
import { Home } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="h-16 flex justify-between items-center px-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Home size={30} className="text-slate-700" />
            <h1 className="text-2xl font-bold text-slate-700">Realtor</h1>
          </Link>
        </div>
      </nav>
      <div className="bg-gray-100 py-10 h-screen">
        <Outlet />
      </div>
    </>
  );
};
