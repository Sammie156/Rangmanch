import { useState } from "react";
import { Link } from "react-router-dom";

// Yes. This looks bad as well.
// TODO: Same as Register page make this much much better.
function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FIXME: NetworkError when attempting to fetch resource.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Form data : ${formData}`);

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-purple-800">
      <div className="bg-[#2c2638] rounded-2xl shadow-xl w-full max-w-md p-8 transition">
        <h2 className="text-2xl font-bold text-[#f9fafd] mb-1">
          Login to your Account
        </h2>
        <h4 className="text-gray-400">
          Don't have an account? {"   "}
          <Link to="/register" className="underline">
            Register here
          </Link>
        </h4>

        <form action="" className="mt-10" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg text-gray-200 mt-3 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Enter username"
              className="mt-1 w-full p-2 border rounded-lg text-[#ffccff] focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-lg text-gray-200 mt-3 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border rounded-lg text-[#ffccff] focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
