import React, { useState, useEffect } from "react";
import Header from "../../components/customer/common/Header";
import Footer from "../../components/customer/common/Footer";
import CartItem from "../../components/customer/cart/CartItem";
import CartSummary from "../../components/customer/cart/CartSummary";
import PromoBanner from "../../components/customer/common/PromoBanner";
import axios from 'axios';
import { addToCart, updateCartItemQuantity, removeItemFromCart } from '../../api/cartApi'; // Correct import path
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from the backend when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("/api/cart"); // Adjust this endpoint as needed
        setCartItems(response.data.items); // Assuming the response has items
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items", error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleAddToCart = async (itemId, quantity) => {
    try {
      console.log("Adding item to cart:", itemId, quantity); // Check the item ID and quantity
      await addToCart(itemId, quantity);  // API call
      console.log("Item added to cart");
      const updatedCart = [...cartItems, { id: itemId, quantity }]; // Update the cart state
      setCartItems(updatedCart);
      console.log("Updated Cart Items:", updatedCart); // Check the updated cart state
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  
  const handleUpdateQuantity = async (itemId, newQty) => {
    try {
      await updateCartItemQuantity(itemId, newQty);  // Make PUT request
      // Optionally update local state with the new quantity here
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItemFromCart(itemId);  // Make DELETE request
      // Optionally remove the item from the local state
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post('/api/checkout', { items: cartItems }); // Send the cart data to the backend for processing
      window.location.href = response.data.checkoutUrl; // Assuming the backend returns a checkout URL
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-black">My Shopping Bag</h1>
        
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Cart Items */}
          <div className="md:w-2/3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id}>
                  <CartItem
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                  {/* Move the Add to Bag button inside the map */}
                  <button
                    onClick={() => handleAddToCart(item.id, 1)} // 1 is the quantity to add, you can change it
                    className="bg-green-500 text-white p-2 rounded mt-4"
                  >
                    Add to Bag
                  </button>
                </div>
              ))
            ) : (
              <div>Your cart is empty.</div>
            )}
          </div>


          {/* Summary */}
          <div className="md:w-1/3 mt-6 md:mt-0">
            <CartSummary subtotal={subtotal} onCheckout={handleCheckout} />
          </div>
          <div>
        {cartItems.map(item => (
          <div key={item.id}>{item.title} - Quantity: {item.quantity}</div>
        ))}
      </div>
        </div>
      </main>
      <Footer />
    </div>
  );

  
};

export default Cart;
