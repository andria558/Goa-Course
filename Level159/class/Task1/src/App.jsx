import React, { useState } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import CartErrorBoundary from "./CartErrorBoundary";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleResetCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h1>🛍️ ონლაინ მაღაზია</h1>
      <ProductList onAddToCart={handleAddToCart} />

      <CartErrorBoundary onReset={handleResetCart}>
        <ShoppingCart items={cartItems} />
      </CartErrorBoundary>
    </div>
  );
}

export default App;
