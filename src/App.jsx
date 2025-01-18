// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/customer/Home';
import Shop from './pages/customer/Shop';
import Cart from './pages/customer/Cart';
import AdminDashboard from './pages/admin/AdminDashboard';  // new import
import Login from './pages/customer/Login'; // Customer login page


function App() {
  return (
    <Router>
      <Routes>
        {/* Customer side routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />  {/* Customer login route */}
        
        {/* Admin side route */}
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
