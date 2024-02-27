// 6-http_express.js

const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a route for unknown endpoints
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.url}</pre>
    </body>
    </html>
  `);
});

// Start the server and listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
