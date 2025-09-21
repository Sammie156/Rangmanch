import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Form data : ${formData}`);

    try {
      const res = await fetch(
        "https://fb24d8bf88df.ngrok-free.app/api/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
      }
    } catch (error) {
      console.log(`Errors: ${error.message}`);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glassmorphic Card with page transition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8"
      >
        <h2 className="text-4xl font-extrabold text-white mb-3 text-center">
          Login
        </h2>
        <p className="text-gray-200 text-center mb-6 font-medium">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 font-semibold">
          <div>
            <label className="block text-sm text-gray-200 mb-2">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg transition"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
