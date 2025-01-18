import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Stay in touch</h3>
            <p className="text-sm text-gray-600 mb-2">
              Subscribe to our newsletter for offers and more!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="border rounded-l-md py-1 px-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-1 rounded-r-md hover:bg-green-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Middle Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Help</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="/faq" className="hover:text-green-600">FAQ</a></li>
              <li><a href="/return-policy" className="hover:text-green-600">Return Policy</a></li>
              <li><a href="/shipping-info" className="hover:text-green-600">Shipping Info</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Phone: (+60) 19-6287192</li>
              <li>Email: support@teashop.com</li>
              <li>Address: Gelugor, Pulau Pinang</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} TeaShop - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
