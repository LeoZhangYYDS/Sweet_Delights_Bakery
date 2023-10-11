const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");
const { storageBucketUpload } = require("../utils/bucketServices");

module.exports = {
  //get all product
  async getAllProduct(req, res, next) {
    try {
      const productRef = db.collection("cakes");
      const snapshot = await productRef
        // .where("category", "==", "cheese cake")
        .orderBy("name", "asc")
        .get();
      //400 error check if this collection exist
      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The products you were looking for do not exist")
        );
      }
      //success: push object properties to array and send to client
      let products = [];
      snapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          category: doc.data().category,
          price: doc.data().price,
          image: doc.data().image,
        });
      });
      res.send(products);
    } catch (err) {
      return next(ApiError.internal("The Products have gone missing", err));
    }
  },
  //post product
  async postProduct(req, res, next) {
    // (b) File Upload to Storage Bucket
    let downloadURL = null;
    try {
      const filename = res.locals.filename;
      downloadURL = await storageBucketUpload(filename);

      // [500 ERROR] Checks for Errors in our File Upload
    } catch (err) {
      return next(
        ApiError.internal(
          "An error occurred in uploading the image to storage",
          err
        )
      );
    }

    // (c) Store the document query in variable & call ADD method (NOT using SET())
    try {
      const productRef = db.collection("cakes");
      const response = await productRef.add({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: Number(req.body.price),
        image: downloadURL,
      });
      console.log(`Added Product ID: ${response.id}`);
      res.send(response.id);
    } catch (err) {
      return next(
        ApiError.internal("Your requset could not be saved at this time", err)
      );
    }
  },
};
