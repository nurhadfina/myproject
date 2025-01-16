import React from "react";

const CartSummary = ({ subtotal, onCheckout }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Order Summary</h2>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
      </div>
      {/* Additional fees, taxes, shipping, etc. could go here */}
      <button
        onClick={onCheckout}
        className="w-full bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700 transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
