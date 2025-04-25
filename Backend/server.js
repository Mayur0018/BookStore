const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book_routes");
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
mongoose
  .connect(URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });


//   defining routes
app.use("/book",bookRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
