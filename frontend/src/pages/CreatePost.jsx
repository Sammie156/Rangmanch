import { useState } from "react";

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
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-800">
      <div className="bg-[#2c2638] rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-[#faf9fd] mb-6">
          Create a Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg text-[#faf9fd]"
          />
          <textarea
            name="description"
            placeholder="Post Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg text-[#faf9fd]"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-2 border rounded-lg text-[#faf9fd]"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
