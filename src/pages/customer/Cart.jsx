import React, { useState, useEffect } from "react";
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

  // Fetch cart items from the backend when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("/api/cart"); // Adjust this endpoint as needed
        setCartItems(response.data.items); // Assuming the response contains an "items" array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Add an item to the cart
  const handleAddToCart = async (itemId, quantity) => {
    try {
      await addToCart(itemId, quantity); // API call to add the item
      const existingItem = cartItems.find((item) => item.id === itemId);
      let updatedCart;

      if (existingItem) {
        // Update quantity if item already exists
        updatedCart = cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // Add new item to the cart
        const newItem = { id: itemId, title: "New Item", price: 10, quantity }; // Adjust as needed
        updatedCart = [...cartItems, newItem];
      }

      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  
  const handleUpdateQuantity = async (itemId, newQty) => {
    try {
      await updateCartItemQuantity(itemId, newQty); // API call to update quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQty } : item
        )
      );
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  // Remove an item from the cart
  const handleRemoveItem = async (itemId) => {
    try {
      await removeItemFromCart(itemId); // API call to remove the item
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // Calculate the subtotal of all items in the cart
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle checkout process
  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/checkout", { items: cartItems }); // API call to checkout
      window.location.href = response.data.checkoutUrl; // Redirect to checkout URL
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

        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Cart Items */}
          <div className="md:w-2/3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))
            ) : (
              <div>Your cart is empty.</div>
            )}
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
