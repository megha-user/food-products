const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the web dev directory
app.use(express.static(path.join(__dirname)));

// Define routes for individual HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'ourproducts.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'gallery.html'));
});

app.get('/testimonials', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.get('/enquiry', (req, res) => {
  res.sendFile(path.join(__dirname, 'enquiry.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
