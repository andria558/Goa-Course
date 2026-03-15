import React from "react";

function ProductHeader({ productName, productImg }) {
  return (
    <div>
      <h2>{productName}</h2>
      <img src={productImg} alt={productName} />
    </div>
  );
}

export default ProductHeader;
