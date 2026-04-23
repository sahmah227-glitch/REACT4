import { useState } from "react";

export default function Card({ product }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card">
      <img src={product.thumbnail} alt="" />

      <h3>{product.title}</h3>

      <p>
        {showMore
          ? product.description
          : product.description.substring(0, 50)}
      </p>

      <span onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </span>
    </div>
  );
}