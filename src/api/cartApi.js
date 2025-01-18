// src/api/cartApi.js
const BASE_URL = "http://localhost:8080/api/cart";

// POST: Add an item to the cart
export const addToCart = async (itemId, quantity) => {
  try {
    const response = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId, quantity }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add item to cart");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in addToCart:", error);
    throw error;
  }
};



// PUT: Update item quantity
export const updateCartItemQuantity = async (itemId, quantity) => {
  const response = await fetch(`${BASE_URL}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: itemId, quantity }),
  });

  if (!response.ok) {
    throw new Error("Failed to update item quantity");
  }

  return await response.json();
};

// DELETE: Remove an item from the cart
export const removeItemFromCart = async (itemId) => {
  const response = await fetch(`${BASE_URL}/remove/${itemId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove item from cart");
  }

  return await response.json();
};

