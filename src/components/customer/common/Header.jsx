// src/components/Header.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Peppermint Tea" },
  { id: 2, name: "Rooibos Tea" },
  { id: 3, name: "Ginger Tea" },
  { id: 4, name: "Chamomile Tea" },
  { id: 5, name: "Detox Tea" },
  { id: 6, name: "Green Tea" },
  { id: 7, name: "Earl Grey Tea" },
  { id: 8, name: "Hibiscus Tea" },
  { id: 9, name: "Masala Chai" },
  { id: 10, name: "Oolong Tea" },
  { id: 11, name: "White Tea" },
  { id: 12, name: "Lemongrass Tea" }
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const navigate = useNavigate();

  const handleCustomerLogin = () => {
    navigate("/login");
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-green-600 flex items-center">
            <img 
              src="https://www.advoice.co.in/wp-content/uploads/2023/11/Chai-Logo-1-1536x864.jpg" 
              alt="Logo" 
              className="h-8 w-auto mr-2"
            />
            UniTea
          </a>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a 
            href="/shop" 
            className="text-gray-700 hover:text-green-600 transition duration-200"
          >
            Shop
          </a>
          
          <a 
            href="#" 
            className="text-gray-700 hover:text-green-600 transition duration-200"
          >
            About
          </a>
        </div>

        {/* Right Section: Search, Cart, & Login Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Form */}
          <form className="relative">

            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search product"
              className="border rounded-md py-1 px-2 text-sm"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 text-gray-500"
            >
              🔍
            </button>
            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute mt-2 w-full bg-white shadow-md rounded-md max-h-60 overflow-y-auto z-10">
                <ul>
                  {filteredProducts.map((product) => (
                    <li
                      key={product.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => (window.location.href = `/product/${product.id}`)}
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>

          {/* Cart */}
          <a
            href="/cart"
            className="text-gray-700 hover:text-green-600 transition duration-200"
          >
            🛒
          </a>

          {/* Customer Login Button */}
          <button
            onClick={handleCustomerLogin}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;