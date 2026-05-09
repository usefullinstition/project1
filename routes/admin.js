const express = require("express");
const router = express.Router();

const User = require("../models/User");

// 📊 ADMIN STATS
router.get("/stats", async (req, res) => {
  try {
    const totalUsers =
      await User.countDocuments();

    const premiumUsers =
      await User.countDocuments({
        isPremium: true,
      });

    const revenue =
      premiumUsers * 300;

    res.json({
      totalUsers,
      premiumUsers,
      revenue,
    });

  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;