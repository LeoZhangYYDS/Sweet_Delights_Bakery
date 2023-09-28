//43
const express = require("express");
const router = express.Router();
//45
const authController = require("../controllers/authController");

const authPolicy = require("../policies/authPolicy");
router.get("/", (req, res, next) => {
  res.send("this is auth route");
});
//auth:list all user   get:   /api/auth/users
router.get("/users", authController.listUsers);

//auth:new user sign up   post:  /api/auth/register
router.post("/register", authPolicy.validateAuth, authController.register);
//auth user login  post:  /api/auth/login
router.post("/login", authPolicy.validateAuth, authController.login);

module.exports = router;

//44 create a authController
