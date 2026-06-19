import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import UserPage from "../../../class/Task2/src/UserPage";
import ProductPage from "./ProductPage";
import BlogPage from "./BlogPage";
import DashboardPage from "./DashboardPage";
import CategoryPage from "./CategoryPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/dashboard/:tab" element={<DashboardPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}
