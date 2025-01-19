import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <ul>
        <li>
          <Link to="/admin/products">Product Management</Link>
        </li>
        <li>
          <Link to="/admin/users">User Management</Link>
        </li>
        <li>
          <Link to="/admin/add-product">Add New Product</Link> {/* Add link to AddProduct */}
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
