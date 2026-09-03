import React from "react";

function ShoppingCart({ items }) {
  if (items.length > 3) {
    throw new Error("Cart crashed: too many items!");
  }

  return (
    <div>
      <h2>🛒 კალათა</h2>
      {items.length === 0 ? (
        <p>კალათა ცარიელია</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
