//npm i firebase-admin
//25 把 fire base 的代码复制过来 然后更改，完了怕有问题加让try catch
//26 require debug
const dbStartup = require("debug")("app:db");
const debugError500 = require("debug")("app:error500");
var admin = require("firebase-admin");
//34 require config
const config = require("./config");

try {
  dbStartup("Attempting database connection...");

  //35改成下面的 var serviceAccount = require("c:/Users/user/Desktop/firesbase/sweet-delights-4d3ff-firebase-adminsdk-vpa9a-13868fe925.json");
  var serviceAccount = require(config.db.serviceAccountKey);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //27 go to firebase website create storage bucket
    //36 改成下面的 storageBucket: "sweet-delights-4d3ff.appspot.com",
    storageBucket: config.db.storageBucket,
  });
  dbStartup("Db connection success!");
  //28
  const db = admin.firestore();
  const bucket = admin.storage().bucket();
  //29 export db methods
  //30 go to .env
  //37 test db connection (only work if you have 1 or more collection)
  const dbPing = db.listCollections().then((collections) => {
    dbStartup("Connected to Cloud Firestore");
    for (let collection of collections) {
      dbStartup(`Found db collection: ${collection.id}`);
    }
  });
  //38 export
  module.exports = { db, bucket, dbPing };
  //39 go to index.js  ,先import dbPing 然后到port的地方call dbPing
} catch (err) {
  debugError500(err);
}
