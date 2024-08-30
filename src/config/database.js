const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:tushar@cluster0.bstsr.mongodb.net/message-me",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));
};

module.exports = connectDB;