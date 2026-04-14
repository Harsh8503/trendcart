import { Link, useLocation } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Fashion", path: "/fashion" },
    { name: "Tech", path: "/tech" },
    { name: "Decor & Gifts", path: "/decorandgifts" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Navbar */}
      <div className="backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[82px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo.png"
              alt="TrendCart"
              className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-xl"
            />

            <span className="text-lg md:text-2xl font-semibold tracking-wide text-white">
              TrendCart
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item, i) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={i}
                  to={item.path}
                  className={`relative text-[15px] lg:text-[17px] font-medium transition duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
          >
            {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur-xl p-3">
          {navItems.map((item, i) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition mb-1 ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-400"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}