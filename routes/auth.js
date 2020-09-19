const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

//AUTH
//@@@@@@@@@
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); //without password
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
