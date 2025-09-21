import { useState } from "react";
import { motion } from "framer-motion";

function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    // TODO: Connect with AWS backend for S3 upload + DB entry
    console.log("Form data:", formData);
    console.log("File:", file);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-cover bg-center relative px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl p-10 rounded-3xl shadow-2xl
                   bg-white/10 backdrop-blur [30px] mt-15 border border-white/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-blue-400/20 opacity-30 animate-gradient-slow rounded-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
            Create a Post
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <textarea
              name="description"
              placeholder="Post Description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <div>
              <label className="block text-white font-semibold mb-2">
                Upload File
              </label>

              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-20 px-4 transition bg-white/10 border-2 border-dashed border-white/30 rounded-xl cursor-pointer hover:border-purple-400 hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l-4-4m4 4l4-4"
                  />
                </svg>
                <span className="text-gray-300 font-medium">
                  Click to upload or drag & drop
                </span>
                {file && (
                  <p className="mt-2 text-sm text-purple-300">
                    Selected: {file.name}
                  </p>
                )}
              </label>

              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-xl transition"
            >
              Create Post
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default CreatePost;
