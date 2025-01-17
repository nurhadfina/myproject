// src/pages/admin/AdminDashboard.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 flex justify-center p-6 overflow-auto">
        <Routes>
          <Route path="products" element={<ProductManagement />} />
          <Route path="users" element={<UserManagement />} />
          {/* Redirect /admin -> /admin/products */}
          <Route path="" element={<Navigate to="products" replace />} />
        </Routes>
      </main>
    </div>
  );
}
