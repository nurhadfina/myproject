import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-green-600">
            <span className="sr-only">Home</span>
            <img 
              src="https://www.advoice.co.in/wp-content/uploads/2023/11/Chai-Logo-1-1536x864.jpg" 
              alt="Logo" 
              className="h-8 w-auto mr-2 inline-block align-middle"
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
            href="/subscribe" 
            className="text-gray-700 hover:text-green-600 transition duration-200"
          >
            Subscribe
          </a>
          <a 
            href="/about" 
            className="text-gray-700 hover:text-green-600 transition duration-200"
          >
            About
          </a>
        </div>
        
        {/* Right Section: Search & Cart Icons */}
        <div className="flex items-center space-x-4">
          <form className="relative">
            <input
              type="text"
              placeholder="Search product"
              className="border rounded-md py-1 px-2 text-sm"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 text-gray-500"
            >
              🔍
            </button>
          </form>
          <a
            href="/cart"
            className="text-gray-700 hover:text-green-600 transition duration-200"
          >
            🛒
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
