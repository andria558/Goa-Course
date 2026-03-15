import React from "react";
import productData from "./productData";
import Card from "./components/Card";

function App() {
  return (
    <div className="catalog">
      {productData.map((item, index) => (
        <Card key={index} productObject={item} />
      ))}
    </div>
  );
}

export default App;
