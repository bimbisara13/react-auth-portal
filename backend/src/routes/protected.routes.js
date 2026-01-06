const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/auth.middleware");
const authorizeRole = require("../middlewares/rbac.middleware");

router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});

router.get("/admin", authenticateToken, authorizeRole("admin"), (req, res) => {
  res.json({ message: "Admin data" });
});

module.exports = router;
