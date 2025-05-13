import { FaShoppingBasket, FaHeart, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-8 bg-transparent absolute top-0 left-0 right-0 z-10">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/images/agromarfeed-logo.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="bg-1 text-white px-8 py-3 rounded-full flex space-x-6 text-sm font-medium gap-4">
        <a href="#" className="hover:underline">
          Beranda
        </a>
        <a href="#" className="hover:underline">
          Cari Pakan
        </a>
        <a href="/consultation" className="hover:underline">
          Konsul Pakan
        </a>
        <a href="#" className="hover:underline">
          Artikel & Tips
        </a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="bg-1 text-white p-2 rounded-full">
          <FaShoppingBasket />
        </button>
        <button className="bg-1 text-white p-2 rounded-full">
          <FaHeart />
        </button>
        <button className="bg-4 text-white p-2 rounded-full">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
}
