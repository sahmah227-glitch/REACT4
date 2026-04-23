import { useEffect, useState } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar products={products} setFilteredProducts={setFilteredProducts} />

      <div className="cards">
        {filteredProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}