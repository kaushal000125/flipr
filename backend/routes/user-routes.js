const express = require("express");

const router = express.Router();

router.post("/login"); // to login the user

router.get("/profile/view"); // to view the profile
router.post("/profile/submit");

module.exports = router;
