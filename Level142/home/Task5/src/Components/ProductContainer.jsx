import React from 'react'

const ProductContainer = () => {
  const product = { name: "Laptop", price: 1200 };
  return <ProductCard product={product} />;
}

export default ProductContainer;