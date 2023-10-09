//17 npm i dotenv
require("dotenv").config();
//1 basic set up
const express = require("express");
const app = express();
//10  require morgan
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
//20 require config
const config = require("./config/config");

const corsOptions = require("./config/corsOptions");
//40 require dbPing
const { dbPing } = require("./config/db");
//12 require ApiError
const ApiError = require("./utils/ApiError");
//15 require apiErrorHandler
const apiErrorHandler = require("./middleware/apiErrorHandler");

//5 import routes
const authRoute = require("./routes/authRoutes");
const productRoute = require("./routes/productRoutes");

//22 Dev debug console logs      npm i debug
const debugStartup = require("debug")("app:startup");

// EXPRESS MIDDLEWARE:
// HTTP Header-setter security & CORS
app.use(helmet()); //before cors 保护api用的
// app.use(cors({ origin: "*" }));     default: 所有的等可以访问我们的api
app.use(cors(corsOptions)); //这样设置 只有 开发的时候和 部署的网站可以访问api
debugStartup("Helmet & CORS Pre-Flight requests enabled");

//2 Express middleware ，middleware的顺序很重要，需要放在前面
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//9 npm i morgan 需要放在所有的route上面 这样才能监测 http status
app.use(morgan("dev"));
//23 to run this use npm run devWin(自己在package.json定义的script名字)
debugStartup("Parsing middleware enable on all routes");

//4 routes
app.use("/api/auth", authRoute); //44
app.use("/api/product", productRoute);

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
