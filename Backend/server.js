const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book_routes");


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
console.log(URI);

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });

// Middleware to parse JSON
app.use(express.json());

// Route setup
app.use("/book", bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
