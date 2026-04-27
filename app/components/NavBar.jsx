import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Authors", path: "/authors" },
  ];

  return (
    <nav className="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/start" className="text-xl font-bold tracking-wide">
          Naturalism
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path} className="relative">
                <span className="text-zinc-300 hover:text-white transition">
                  {item.name}
                </span>

                {/* Active underline animation */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-white"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
