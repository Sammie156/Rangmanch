import { Link } from "react-router-dom";

function Navbar() {
  function onLogout() {
    console.log("Removing tokens");

    localStorage.removeItem("token");
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1f1f1f] shadow-md">
      <h1 className="text-3xl text-indigo-100">
        <Link to="/">Rangmanch</Link>
      </h1>

      {localStorage.getItem("token") ? (
        <div>
          <h1 className="text-[#ffaaff]">Registered</h1>
          <button
            onClick={onLogout}
            className="text-[#ffffff] bg-purple-600 py-2 px-4 font-semibold rounded-lg hover:bg-purple-800 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button className="text-[#ffffff] bg-purple-600 py-2 px-4 font-semibold rounded-lg hover:bg-purple-800 transition">
            <Link to="/login">Login</Link>
          </button>
          <h1 className="text-[#33ff33]">Not registered</h1>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
