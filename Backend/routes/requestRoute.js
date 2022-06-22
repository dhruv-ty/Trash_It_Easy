const express = require("express");
const router = express.Router();
const usercontroler = require("../controllers/usercontroler");
router.post("/create", usercontroler.newRequest);
router.delete("/delete", usercontroler.delRequest);
module.exports = router;
