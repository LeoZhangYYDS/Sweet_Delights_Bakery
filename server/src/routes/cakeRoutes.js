const express = require("express");
const router = express.Router();
const cakeController = require("../controllers/cakeController");
//test
router.get("/", (req, res) => {
  res.send("this is product route");
});
//get all products,   get:  /api/cakes/all
router.get("/all", cakeController.getAllProduct);

//add/post product

//get by id

//update by id

//delete by id

module.exports = router;
