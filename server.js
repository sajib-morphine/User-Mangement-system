const express = require("express");
const dotenv = require("dotenv");
//const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// Load environment variables from .env file
dotenv.config();

// Connect to Database (Simulated)
//connectDB();

const app = express();

// Middleware
app.use(express.json()); // Body parser

// Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to the User Management API!");
});

// User Routes
// All user-related endpoints are mounted here under the /api/users path
app.use("/api/users", userRoutes);

// Handle unknown routes (404)
app.use((req, res, next) => {
  res.status(404).json({
    message: `Cannot find ${req.originalUrl} on this server!`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access API at http://localhost:${PORT}/api/users`);
});