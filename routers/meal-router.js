const express = require("express");
const addNewMealRouter = express.Router();
const {
  showAllTheMelas,
  addNewMeal,
} = require("../controllers/meals-controller");

addNewMealRouter.get("/", showAllTheMelas);

addNewMealRouter.post("/add", addNewMeal);

module.exports = addNewMealRouter;
