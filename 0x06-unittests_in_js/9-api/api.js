const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Endpoint for available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint for login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Other routes
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start server
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
