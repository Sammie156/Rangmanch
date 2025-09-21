import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-white">
          Rangmanch
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-white hover:text-purple-400 font-semibold transition"
          >
            Home
          </Link>
          <Link
            to="/create-post"
            className="text-white hover:text-purple-400 font-semibold transition"
          >
            Create Post
          </Link>
          <Link
            to="/login"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-5 rounded-xl transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-xl transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <span className="text-3xl">&times;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 space-y-3 flex flex-col"
        >
          <Link
            to="/"
            className="text-white hover:text-purple-400 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/create-post"
            className="text-white hover:text-purple-400 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Create Post
          </Link>
          <Link
            to="/login"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-5 rounded-xl transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-xl transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
