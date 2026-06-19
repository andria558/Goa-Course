import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import Settings from "./Settings";
import Product from "./Product";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/product/123">Product 123</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/product/:id" element={<Product />}>
            <Route path="info" element={<ProductInfo />} />
            <Route path="reviews" element={<ProductReviews />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;










