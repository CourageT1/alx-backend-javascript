// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a route for the /students endpoint
app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  countStudents(databaseFile)
    .then(() => {
      res.end(); // Response handled by countStudents function
    })
    .catch(error => {
      res.status(500).send(error.message); // Send error message as response
    });
});

// Start the server and listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
