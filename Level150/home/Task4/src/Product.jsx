import React from "react"
import { useParams, Link, Outlet } from "react-router-dom"

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Page - ID: {id}</h2>
      <nav>
        <ul>
          <li>
            <Link to="info">Info</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default Product;