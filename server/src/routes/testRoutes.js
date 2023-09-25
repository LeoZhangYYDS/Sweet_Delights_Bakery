//6 basic set up
const express = require("express");
const router = express.Router();

//7  set up test route  and test in postman
router.get("/", (req, res, next) => {
  res.send("this is test route");
});
//8 export router
module.exports = router;
