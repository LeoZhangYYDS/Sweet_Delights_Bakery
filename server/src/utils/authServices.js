const { db } = require("../config/db");
const config = require("../config/config");
const deugAuth = require("debug")("app:authServices");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

module.exports = {
  //49
  async findUser(email) {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    let users = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        username: doc.data().username,
        email: doc.data().email,
        password: doc.data().password,
        isAdmin: doc.data().isAdmin,
      });
    });
    const userMatch = users.filter((user) => email === user.email);
    return userMatch;
  },
  //51
  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  }, //52 back to authController

  //54
  async userDetailsToJSON(id) {
    const usersRef = db.collection("users");
    const user = await usersRef.doc(id).get();

    //55 create a user但是没有密码，用 lodash 的 method -  omit
    const userJSON = _.omit({ id: id, ...user.data() }, "password");
    deugAuth(userJSON);

    return userJSON;
  }, //56 back to authController

  //59
  jwtSignUser(user) {
    const payload = user;
    //60 go to config.js and .env
    const secret = config.authentication.jwtSecret;
    //61 过期时间  second*minute*hour ，可以理解为 1分钟*60分=1小时*24=24h
    const tokenExpireTime = 60 * 60 * 24;

    const token = jwt.sign(payload, secret, { expiresIn: tokenExpireTime });
    return token;
    //62 goback to authRoutes create login route
  },
  //65
  async comparePassword(user, password) {
    // (a) Retrieves hashed password in DB
    const hashPassword = user[0].password; //因为 userMatch[只有一个user]，他的index是0

    // (b) Compare password passed in with DB hashed password via Bcrypt for match
    const passwordMatch = await bcrypt.compare(password, hashPassword);

    // (c) Return result (we want a match!)
    return passwordMatch;
    //66 goback to authController
  },
};
