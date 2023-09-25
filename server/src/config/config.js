module.exports = {
  // 18 [A] PORT ENVs   19 create .env in  server file
  port: process.env.PORT,
  // 32 [B] DATABASE ENVs
  db: {
    serviceAccountKey: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET_URL,
    //33 go back to db.js
  },
};
