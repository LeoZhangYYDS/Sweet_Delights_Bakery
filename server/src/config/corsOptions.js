const config = require("./config");
// CORS: https://www.npmjs.com/package/cors
const debugCors = require("debug")("app:cors");

const whitelist = config.corsAllowedOptions;
debugCors(whitelist);

const corsOptions = {
  origin: (origin, callback) => {
    //successful
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      //blocked
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
