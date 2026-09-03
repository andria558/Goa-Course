import React from "react";

function ProductList({ onAddToCart }) {
  const products = ["Laptop", "Phone", "Headphones", "Camera"];

  return (
    <div>
      <h2>პროდუქტების სია</h2>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>
            {p}{" "}
            <button onClick={() => onAddToCart(p)}>კალათაში დამატება</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
