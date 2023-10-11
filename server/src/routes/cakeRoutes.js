const express = require("express");
const router = express.Router();
const cakeController = require("../controllers/cakeController");
const fileServerUpload = require("../middleware/fileServerUpload");
const productPolicy = require("../policies/productPolicy");
const filePolicy = require("../policies/filePolicy");
//test
router.get("/", (req, res) => {
  res.send("this is product route");
});
//get all products,   get:  /api/cakes/all
router.get("/all", cakeController.getAllProduct);

//add/post product
router.post(
  "/post",
  [
    productPolicy.validateProduct,
    filePolicy.filesPayloadExists,
    filePolicy.fileSizeLimiter,
    filePolicy.fileExtLimiter([".png", ".jpg", ".jpeg", ".gif"]),
    fileServerUpload,
  ],
  cakeController.postProduct
);

//get by id

//update by id

//delete by id

module.exports = router;
