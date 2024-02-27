// 5-http.js

const http = require('http');
const countStudents = require('./3-read_file_async');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Define the routes
  if (req.url === '/') {
    // Handle the root route
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Handle the /students route
    const databaseFile = process.argv[2];
    countStudents(databaseFile)
      .then(() => {
        res.end(); // Response handled by countStudents function
      })
      .catch(error => {
        res.end(error.message); // Send error message as response
      });
  } else {
    // Handle unknown routes
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
