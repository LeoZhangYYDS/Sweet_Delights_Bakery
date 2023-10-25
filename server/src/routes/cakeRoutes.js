const express = require("express");
const router = express.Router();
const cakeController = require("../controllers/cakeController");
const fileServerUpload = require("../middleware/fileServerUpload");
const productPolicy = require("../policies/productPolicy");
const filePolicy = require("../policies/filePolicy");
const verifyAuth = require("../middleware/verifyAuth");
//test
router.get("/", (req, res) => {
  res.send("this is product route");
});

//1 get all products,   get:  /api/cakes/all
router.get("/all", cakeController.getAllProduct);

//2 add/post product    post: /api/cakes/post
router.post(
  "/post",
  [
    productPolicy.validateProduct,
    filePolicy.filesPayloadExists,
    filePolicy.fileSizeLimiter,
    filePolicy.fileExtLimiter([".png", ".jpg", ".jpeg", ".gif"]),
    [verifyAuth.auth, verifyAuth.admin],
    fileServerUpload,
  ],
  cakeController.postProduct
);

//3 get by id    get: /api/cakes/:id
router.get("/:id", cakeController.getProductById);

//4 update by id  post: /api/cakes/:id
router.put(
  "/:id",
  [
    productPolicy.validateProduct,
    filePolicy.filesPayloadExists,
    filePolicy.fileSizeLimiter,
    filePolicy.fileExtLimiter([".png", ".jpg", ".jpeg", ".gif"]),
    [verifyAuth.auth, verifyAuth.admin],
    fileServerUpload,
  ],
  cakeController.updateProductById
);
//delete by id     delete:  /api/cakes/:id
router.delete(
  "/:id",
  [verifyAuth.auth, verifyAuth.admin],
  cakeController.deleteProductById
);

module.exports = router;
