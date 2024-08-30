const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(
      process.env.DATABASE_URL,
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));
};

module.exports = connectDB;