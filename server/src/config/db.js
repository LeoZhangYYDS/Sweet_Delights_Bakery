//npm i firebase-admin
//25 把 fire base 的代码复制过来 然后更改，完了怕有问题加让try catch
//26 require debug
const dbStartup = require("debug")("app:db");
const debugError500 = require("debug")("app:error500");
var admin = require("firebase-admin");
//34 require config
const config = require("./config");

try {
  dbStartup("Db connection success!");
  //setup of db credentials
  let serviceAccountKey;
  // STANDARD SETUP: ENV KEY
  if (config.env === "development" || config.env === "production") {
    serviceAccountKey = config.db.google_account_credentials;
    // NEW SETUP: SEPARATE ENVs
  } else if (config.env === "preview") {
    serviceAccountKey = {
      type: config.db.type,
      project_id: config.db.project_id,
      private_key_id: config.db.private_key_id,
      private_key: config.db.private_key,
      client_email: config.db.client_email,
      client_id: config.db.client_id,
      auth_uri: config.db.auth_uri,
      token_uri: config.db.token_uri,
      auth_provider_x509_cert_url: config.db.auth_provider_x509_cert_url,
      client_x509_cert_url: config.db.client_x509_cert_url,
      universe_domain: config.db.universe_domain,
    };
  }
  dbStartup(serviceAccountKey);

  // OPTIONS VAR: Grant admin access to firebase services + bucket services
  const firebaseAppOptions = {
    credential: admin.credential.cert(serviceAccountKey),
    storageBucket: config.db.storageBucket,
  };

  //init firebase services & set core database APIS

  admin.initializeApp(firebaseAppOptions);
  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  // const dbPing = db.listCollections().then((collections) => {
  //   dbStartup("Connected to Cloud Firestore");
  //   for (let collection of collections) {
  //     dbStartup(`Found db collection: ${collection.id}`);
  //   }
  // });
  //38 export
  module.exports = { db, bucket };
  //39 go to index.js  ,先import dbPing 然后到port的地方call dbPing
} catch (err) {
  debugError500(err);
}
