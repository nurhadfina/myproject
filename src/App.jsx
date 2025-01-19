// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/customer/Home';
import Shop from './pages/customer/Shop';
import Cart from './pages/customer/Cart';
import ProductDetail from './pages/customer/ProductDetail';
import Checkout from './pages/customer/Checkout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProduct from './pages/admin/AddProduct';  // Import AddProduct component
import Login from './pages/customer/Login';  // Customer login page

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer side routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />  {/* Customer login route */}
        <Route path="/product/:id" element={<ProductDetail />} />
        
        {/* Admin side routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />  {/* Add route for AddProduct */}
      </Routes>
    </Router>
  );
}

export default App;
