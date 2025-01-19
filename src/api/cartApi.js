const BASE_URL = "http://localhost:8080/api/cart";

// POST: Add an item to the cart
export const addToCart = async (productId, quantity) => {
  try {
    console.log(`Sending POST request to ${BASE_URL} with productId: ${productId}, quantity: ${quantity}`);
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        quantity,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
    const responseData = await response.json();
    console.log("Response data:", responseData);
    return responseData; // Return the response data
  } catch (error) {
    console.error("Error adding to cart:", error);
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

