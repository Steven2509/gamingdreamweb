import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Thành Viên", to: "/team" }, // dùng route
    { name: "Gameplay", to: "/gameplay" },
    { name: "Thành Tựu", to: "#thanhtuu" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between text-white font-semibold text-sm tracking-wide bg-transparent backdrop-blur-sm">
      {/* Logo */}
      <Link
        to="/"
        className="text-lg font-bold tracking-widest hover:text-green-300 transition"
      >
        GAMING DREAM 🎮
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-4">
        {navItems.map((item) =>
          item.to.startsWith("/") ? (
            <Link
              key={item.name}
              to={item.to}
              className="px-3 py-1 rounded-md hover:bg-green-100 hover:bg-opacity-40 active:bg-green-300 active:bg-opacity-70 transition-all duration-200"
            >
              {item.name}
            </Link>
          ) : (
            <a
              key={item.name}
              href={item.to}
              className="px-3 py-1 rounded-md hover:bg-green-100 hover:bg-opacity-40 active:bg-green-300 active:bg-opacity-70 transition-all duration-200"
            >
              {item.name}
            </a>
          )
        )}
        {!isLoggedIn && (
          <Link
            to="/login"
            className="px-4 py-1 rounded-full border border-green-400 bg-green-100 hover:bg-green-200 active:bg-green-400 text-gray-800 font-semibold transition-all duration-200"
          >
            Log In
          </Link>
        )}
      </nav>

      {/* Burger icon (mobile only) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none z-50"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md text-white flex flex-col items-center space-y-4 py-6 md:hidden z-40"
          >
            {navItems.map((item) =>
              item.to.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-base hover:text-green-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.to}
                  className="text-base hover:text-green-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
            {!isLoggedIn && (
              <Link
                to="/login"
                className="px-4 py-1 rounded-full border border-green-400 bg-green-100 hover:bg-green-200 active:bg-green-400 text-gray-800 font-semibold transition"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
