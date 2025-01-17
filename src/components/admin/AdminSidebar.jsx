// src/components/admin/AdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="w-full md:w-64 bg-lime-400 text-white h-screen shadow-lg">
      <div className="p-4 text-xl font-bold border-b border-lime-700">
        Admin Dashboard
      </div>
      <ul className="py-4">
        <li>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `block py-2 px-4 hover:bg-blue-500 transition ${
                isActive ? 'bg-blue-500 font-semibold' : ''
              }`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `block py-2 px-4 hover:bg-blue-500 transition ${
                isActive ? 'bg-blue-500 font-semibold' : ''
              }`
            }
          >
            Users
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
