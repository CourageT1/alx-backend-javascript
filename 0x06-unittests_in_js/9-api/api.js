const express = require('express');
const app = express();

// Other routes
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for cart with ID
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Start server
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
