const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const chatRoutes = require("./routes/chat");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const paymentRoutes = require("./routes/payment");
const adminAuthRoutes = require("./routes/adminAuth");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database
connectDB();

// routes
app.use("/chat", chatRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/admin/auth", adminAuthRoutes);
app.use("/payment", paymentRoutes);

// root route
app.get("/", (req, res) => {
  res.send("🚀 🚀 Gebeya AI Server is Live");
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});