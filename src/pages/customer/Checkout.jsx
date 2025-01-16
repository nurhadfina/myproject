import React from "react";
import Header from "../../components/customer/common/Header";
import Footer from "../../components/customer/common/Footer";
import PromoBanner from "../../components/customer/common/PromoBanner";

const Checkout = () => {
  // In a real app, you'd fetch cart items, user info, etc.
  const handleFinishPurchase = () => {
    // Payment logic here
    alert("Purchase complete!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Items overview</h1>
        <div className="bg-white border p-4 rounded-md mb-6">
          {/* Example single item + price */}
          <div className="flex justify-between">
            <div>Green Tea x 1</div>
            <div>$31</div>
          </div>
          {/* Shipping options, payment options, etc. */}
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment details</h2>
        <div className="bg-white border p-4 rounded-md mb-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleFinishPurchase();
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                required
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Full name</label>
              <input
                type="text"
                required
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Address</label>
              <input
                type="text"
                required
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">City</label>
              <input
                type="text"
                required
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Zip/Postal Code</label>
              <input
                type="text"
                required
                className="border rounded px-2 py-1 w-full"
              />
            </div>

            {/* Payment Info (credit card #, etc.) could go here */}
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Finish purchase
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
