import React, { useState } from "react";
import Header from "../../components/customer/common/Header";
import Footer from "../../components/customer/common/Footer";
import CartItem from "../../components/customer/cart/CartItem";
import CartSummary from "../../components/customer/cart/CartSummary";
import PromoBanner from "../../components/customer/common/PromoBanner";

const initialCart = [
  {
    id: 1,
    title: "Green Tea",
    price: 31.0,
    quantity: 1,
    imageUrl: "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_799464_17363588257468830.jpg",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleUpdateQuantity = (itemId, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, newQty) } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Navigate to checkout page, e.g.:
    window.location.href = "/checkout";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-black">My Shopping Bag</h1>
        
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Cart Items */}
          <div className="md:w-2/3">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="md:w-1/3 mt-6 md:mt-0">
            <CartSummary subtotal={subtotal} onCheckout={handleCheckout} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
