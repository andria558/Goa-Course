import React from 'react'

const ProductPage = () => {
  const { productId } = useParams();
  
  return (
    <h2>Product Details for {productId}</h2>
  )
}

export default ProductPage;