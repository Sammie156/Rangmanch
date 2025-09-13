import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password should be of 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      // TODO: Call register API here
    }
  };

  // I know it looks basic and too basic.
  // TODO: Make this better looking. Modernish, with gradients and pictures
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-purple-500">
      <div className="bg-[#2c2638] rounded-2xl shadow-xl w-full max-w-md p-8 transition">
        <h2 className="text-2xl font-bold text-[#f9fafd] mb-1">
          Create an Account
        </h2>
        <h4 className="text-gray-400">
          Already have an account?{"  "}
          <Link to="/login" className="underline">
            Log in.
          </Link>
        </h4>

        <form action="" className="mt-10">
          <div>
            <label className="block font-semibold text-lg text-gray-200 mt-3">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg text-[#ffccff] focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-200 mt-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="mt-1 w-full p-2 border rounded-lg text-[#ffccff] focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-200 mt-3">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter email"
              className="mt-1 w-full p-2 border rounded-lg text-[#ffccff] focus:ring-2 focus:ring-purple-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
