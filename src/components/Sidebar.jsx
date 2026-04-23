import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ products, setFilteredProducts }) {
  const [active, setActive] = useState("all");

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const handleFilter = (cat) => {
    setActive(cat);

    if (cat === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(p => p.category === cat);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="sidebar">
      <h2 className="title">Categories</h2>

      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={active === cat ? "btn active" : "btn"}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}