//43
const express = require("express");
const router = express.Router();
//45
const authController = require("../controllers/authController");

router.get("/", (req, res, next) => {
  res.send("this is auth route");
});
router.get("/users", authController.listUsers);

module.exports = router;

//44 create a authController
