const express = require("express");
const router = express.Router();

router.get("/:pid", (req, res) => {
  res.send("hi");
});
module.exports = router;
