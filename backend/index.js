const express = require("express");
const moogoose = require("mongoose");
const dotenv = require("dotenv");
const restaurantRoutes = require("./src/routes/restaurantRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/restaurants", restaurantRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to MongoDB
const mongoURL =
  "mongodb+srv://pasindu123:Pasindu123@restuarentbackend.rfy2smt.mongodb.net/?retryWrites=true&w=majority&appName=restuarentBackend";

moogoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connect to database");
    app.listen(9900, () => {
      console.log(`Server is running on port 9900`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
