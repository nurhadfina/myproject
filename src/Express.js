// Get Cart Items
router.get('/api/cart', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart);
});

// Update Cart Item Quantity
router.put('/api/cart/update', async (req, res) => {
  const { itemId, quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user.id });
  const item = cart.items.find(item => item.id === itemId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    await cart.save();
  }
  res.json(cart);
});

// Remove Cart Item
router.delete('/api/cart/remove/:itemId', async (req, res) => {
  const { itemId } = req.params;
  const cart = await Cart.findOne({ userId: req.user.id });
  cart.items = cart.items.filter(item => item.id !== itemId);
  await cart.save();
  res.json(cart);
});

// Checkout
router.post('/api/checkout', async (req, res) => {
  // Process checkout (payment, order creation, etc.)
  const checkoutUrl = "https://yourpaymentgateway.com"; // Example URL
  res.json({ checkoutUrl });
});
