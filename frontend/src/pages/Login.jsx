import { Link } from "react-router-dom";

// Yes. This looks bad as well.
// TODO: Same as Register page make this much much better.
function Login() {

    const handleSubmit = (e) => {
        e.preventDefaults();
        console.log("Handle submitting here");

        // TODO: Handle submitting here
        // TODO: Call login API here
    }

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

        <form action="" className="mt-10">
          <div>
            <label className="block text-lg text-gray-200 mt-3 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
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
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border rounded-lg text-[#ffccff] focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
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
