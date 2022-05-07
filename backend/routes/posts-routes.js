const express = require("express");

const router = express.Router();

router.get("/all"); // to view all loan requests.
router.get("/:pid"); // to view a particular loan request and all its changes

router.patch("/:pid"); // to modify the loan request
router.delete("/:pid"); // prompt before deleting

router.get("/accept/:pid"); // prompt before accepting

module.exports = router;
