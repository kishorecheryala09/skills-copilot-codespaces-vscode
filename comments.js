// Create web server
const express = require('express');
const app = express();
// import comments
const comments = require('./comments');

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server on port 4001
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});