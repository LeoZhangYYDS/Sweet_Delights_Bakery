import api from "./api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - Cake
function getAll() {
  return api.get("/cakes/all");
}

// POST - AddProduct

// GET BY ID - ProductDetail

// PUT - EditProduct

// DELETE - ProductDetail

const cakeService = {
  getAll,
};

export default cakeService;
