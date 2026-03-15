import React from "react";

function PriceTag({ price }) {
  return <p>${price.toFixed(2)}</p>;
}

export default PriceTag;
