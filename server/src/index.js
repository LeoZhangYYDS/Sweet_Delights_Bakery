//17 npm i dotenv
require("dotenv").config();
//1 basic set up
const express = require("express");
const app = express();
//10  require morgan
const morgan = require("morgan");
//20 require config
const config = require("./config/config");
//40 require dbPing
const { dbPing } = require("./config/db");
//12 require ApiError
const ApiError = require("./utils/ApiError");
//15 require apiErrorHandler
const apiErrorHandler = require("./middleware/apiErrorHandler");

//5 import routes
const testRoute = require("./routes/testRoutes");
const authRoute = require("./routes/authRoutes");

//22 Dev debug console logs      npm i debug
const debugStartup = require("debug")("app:startup");

//2 Express middleware ，middleware的顺序很重要，需要放在前面
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//9 npm i morgan 需要放在所有的route上面 这样才能监测 http status
app.use(morgan("dev"));
//23 to run this use npm run devWin(自己在package.json定义的script名字)
debugStartup("Parsing middleware enable on all routes");

//4 routes
app.use("/api", testRoute);
app.use("/api/auth", authRoute); //44

//11 set up error path 1 : not found route 所有routes没有设置的路径会来到这里
app.use((req, res, next) => {
  next(ApiError.notFound());
});
//14 set up error path 2 :user/server error
app.use(apiErrorHandler);

//3 set up port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
//21 把 3 换成下面的
// app.listen(config.port, () =>
//   console.log(`Server is running on port:${config.port}`)
// );

//41 把 21 换成下面的
dbPing.then(() => {
  app.listen(config.port, () =>
    console.log(`Server is running on port:${config.port}`)
  );
});
//42 successful connect to database,then go to routes foder create a auth route

//24 create  db.js file in config 文件夹 链接database