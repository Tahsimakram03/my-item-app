import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddItems from "./pages/AddItems";
import ViewItems from "./pages/ViewItems";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow p-4 flex gap-4">
          <Link to="/" className="text-blue-600 font-semibold">View Items</Link>
          <Link to="/add" className="text-blue-600 font-semibold">Add Item</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/add" element={<AddItems />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
