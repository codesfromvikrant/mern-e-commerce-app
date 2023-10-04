import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import ProductsList from "./pages/admin/ProductsList";
import Product from "./pages/admin/Product";
import NewProduct from "./pages/admin/NewProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="products/new-product" element={<NewProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
