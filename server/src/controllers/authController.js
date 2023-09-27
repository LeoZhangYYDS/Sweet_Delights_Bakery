const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");
const {
  findUser,
  hashPassword,
  comparePassword,
  userDetailsToJSON,
  jwtSignUser,
} = require("../utils/authServices");

module.exports = {
  //46
  // [1] GET ALL Users
  async listUsers(req, res, next) {
    // Store the document query in variable & call GET method
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    // [400 ERROR] Check for User Asking for Non-Existent Documents
    if (snapshot.empty) {
      return next(
        ApiError.badRequest("The users you were looking for do not exist")
      );

      // SUCCESS: Push object properties to array and send to client
    } else {
      let users = [];
      snapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          username: doc.data().username,
          email: doc.data().email,
          isAdmin: doc.data().isAdmin,
        });
      });
      res.send(users);
    }
  },
  //47
  // [2] REGISTER: POST
  async register(req, res, next) {
    try {
      // Destructure specific properties for use
      const { username, email, password } = req.body;

      // 48 Validation: Block matching user email
      const userMatch = await findUser(email);
      //49 go to utils forder create a auth Services create a findUser function
      if (userMatch.length === 1) {
        return next(ApiError.badRequest("This email is already in use"));
      } else {
        // Save new user to database
        const usersRef = db.collection("users");
        const response = await usersRef.add({
          username: username,
          email: email,
          // 50 npm i bcrypt , npm i lodash,npm i jsonwebtoken go to utils forder ,auth Service file,create a hash password function
          password: await hashPassword(password),
          isAdmin: false,
        });
        // Confirm Registration
        console.log(`Success - User: ${response.id} registered!`);

        // 53 Convert user details to JSON & remove the password, go to authServices
        const userJSON = await userDetailsToJSON(response.id);
        // 57 Return user object + token  with out password
        res.send({
          user: userJSON,
          //58 import jwtSignUser go to authServices
        });
      }
    } catch (err) {
      return next(
        ApiError.internal("Your user profile could not be registered", err)
      );
    }
  },
  //63
  // [3] LOGIN: POST
  async login(req, res, next) {
    try {
      // (a) Destructure specific properties for use
      const { email, password } = req.body;

      // (b) Validation: Block non-matching user email
      // NOTE: We want unique email registered to account
      const userMatch = await findUser(email);

      if (userMatch.length === 0) {
        return next(
          ApiError.badRequest(
            "The credentials entered are not correct (DEBUG: email)"
          )
        );
      }

      // (c) Validation: Block non-matching passwords
      //64 go to authServices create a coparePassword function
      const passwordMatch = await comparePassword(userMatch, password);
      //67  if passwordMatch = false
      if (!passwordMatch) {
        return next(
          ApiError.badRequest(
            "The credentials entered are not correct (DEBUG: password)"
          )
        );
      }
      //68  if passwordMatch = true
      // (d) Confirm Login & Convert User Details to JSON
      console.log(`Success - User: ${userMatch[0].id} is logged in!`);

      const userJSON = await userDetailsToJSON(userMatch[0].id);

      // (e) Return user object + token
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      return next(
        ApiError.internal(
          "Your user profile cannot be logged into at this time",
          err
        )
      );
    }
  },
};
