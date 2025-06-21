import { useState } from "react";

const AddItems = () => {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || []);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: "",
    additionalImages: [],
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "coverImage") {
      setFormData({ ...formData, coverImage: URL.createObjectURL(files[0]) });
    } else if (name === "additionalImages") {
      const imgs = Array.from(files).map((file) => URL.createObjectURL(file));
      setFormData({ ...formData, additionalImages: imgs });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItems = [...items, formData];
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setItems(updatedItems);
    setSuccess("✅ Item successfully added!");
    setTimeout(() => setSuccess(""), 3000);
    setFormData({
      name: "",
      type: "",
      description: "",
      coverImage: "",
      additionalImages: [],
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f6ff] px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add new item</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Item Name" className="w-full p-3 border rounded" />
          <input name="type" type="text" value={formData.type} onChange={handleChange} required placeholder="Item Type" className="w-full p-3 border rounded" />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-3 border rounded" />
          <input name="coverImage" type="file" accept="image/*" onChange={handleChange} required className="w-full" />
          <input name="additionalImages" type="file" accept="image/*" multiple onChange={handleChange} required className="w-full" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setFormData({ name: "", type: "", description: "", coverImage: "", additionalImages: [] })} className="text-gray-600">Cancel</button>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Add item</button>
          </div>
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddItems;
