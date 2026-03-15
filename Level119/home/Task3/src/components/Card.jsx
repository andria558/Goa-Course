import React from "react";
import ProductHeader from "./ProductHeader";
import PriceTag from "./PriceTag";

function Card({ productObject }) {
  const { productName, productImg, price } = productObject;

  return (
    <div className="card">
      <ProductHeader productName={productName} productImg={productImg} />
      <PriceTag price={price} />
    </div>
  );
}

export default Card;
