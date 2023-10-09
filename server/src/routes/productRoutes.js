const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
//test
router.get("/", (req, res) => {
  res.send("this is product route");
});
//get all products,   get:  /api/product/all
router.get("/all", productController.getAllProduct);

//add/post product

//get by id

//update by id

//delete by id

module.exports = router;
