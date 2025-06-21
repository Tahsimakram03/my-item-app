import { useState, useEffect } from "react";

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View Items</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow rounded p-4">
            <img src={item.coverImage} alt={item.name} className="h-40 object-cover rounded mb-2" />
            <h2 className="font-semibold text-lg">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewItems;
