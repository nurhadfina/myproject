import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/customer/common/Header";
import Footer from "../../components/customer/common/Footer";
import CartItem from "../../components/customer/cart/CartItem";
import CartSummary from "../../components/customer/cart/CartSummary";
import PromoBanner from "../../components/customer/common/PromoBanner";
import axios from "axios";
import { addToCart, updateCartItemQuantity, removeItemFromCart } from "../../api/cartApi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("/api/cart");
        setCartItems(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleAddToCart = async (itemId, quantity) => {
    try {
      const response = await addToCart(itemId, quantity);
      const newItem = response.data; // Assuming API returns the updated item
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === itemId);
        return existingItem
          ? prevItems.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          : [...prevItems, newItem];
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      setError("Failed to add item to the cart. Please try again.");
    }
  };

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleUpdateQuantity = useCallback(
    debounce(async (itemId, newQty) => {
      if (newQty <= 0) return;
      try {
        await updateCartItemQuantity(itemId, newQty);
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQty } : item
          )
        );
      } catch (error) {
        console.error("Error updating item quantity:", error);
      }
    }, 500),
    []
  );

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItemFromCart(itemId);
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/checkout", { items: cartItems });
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">My Shopping Bag</h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-2/3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={(newQty) => handleUpdateQuantity(item.id, newQty)}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              ))
            ) : (
              <div className="text-center text-gray-600">
                Your cart is empty. <a href="/shop" className="text-blue-500 underline">Shop Now</a>.
              </div>
            )}
          </div>

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
