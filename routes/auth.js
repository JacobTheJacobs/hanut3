const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const User = require("../models/User");

//AUTH
//@@@@@@@@@
router.get("/", auth, admin, async (req, res) => {
  console.log(req.user);
  try {
    const user = await User.findById(req.user.id).select("-password"); //without password
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
