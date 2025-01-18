// src/components/admin/AdminHeader.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminHeader() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // If you’re using authentication, also clear user tokens or session data here.
    // For example: localStorage.removeItem('token');
    // Then redirect to root page:
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between bg-pink-100 text-gray-800 p-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      
      <button
        onClick={handleSignOut}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
      >
        Sign Out
      </button>
    </header>
  );
}
