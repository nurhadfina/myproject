// src/pages/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Local state for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // "admin" or "customer"

  // Simulate a login handler
  const handleLogin = (e) => {
    e.preventDefault();

    // In a real app, you'd make an API call here for authentication.
    // For demonstration, let's do a simple check:
    if (email && password) {
      // If admin is selected, navigate to /admin
      if (role === "admin") {
        navigate("/admin");
      } else {
        // Otherwise, navigate to home or a "user" page
        navigate("/");
      }
    } else {
      alert("Please enter valid email and password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Login Card */}
      <form 
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label 
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded focus:outline-none 
                       focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label 
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded focus:outline-none
                       focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Role Selection (Admin or Customer) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Select Role
          </label>
          <select
            className="w-full px-3 py-2 border rounded focus:outline-none
                       focus:ring-2 focus:ring-green-400"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded
                     hover:bg-green-700 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
