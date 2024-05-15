const express = require("express");
const restaurantRouter = express.Router();

const {
  showAllTheRestorents,
  addNewRestaurant,
} = require("../controllers/restaurants-controler");

restaurantRouter.get("/", showAllTheRestorents);

restaurantRouter.post("/add", addNewRestaurant);

module.exports = restaurantRouter;
