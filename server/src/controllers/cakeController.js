const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");

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
};
