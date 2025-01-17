// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/customer/Home';
import Shop from './pages/customer/Shop';
import Cart from './pages/customer/Cart';
import AdminDashboard from './pages/admin/AdminDashboard';  // new import

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer side routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Admin side route */}
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
