// src/index.js - Main Express App Configuration

const express = require('express');
const app = express();

// Import Routes
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json()); // To parse JSON bodies

// Health check route
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'User Management API is operational.',
    endpoints: [
      '/api/users/create-user',
      '/api/users/all-users',
      // ... list other primary endpoints
    ]
  });
});

// Primary API route grouping
app.use('/api/users', userRoutes);

// Basic Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Something broke!',
    error: err.message
  });
});

module.exports = app;