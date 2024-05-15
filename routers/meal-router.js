const express = require("express");
const addNewMealRouter = express.Router();
const {
  showAllTheMelas,
  addNewMeal,
  showTheAddMealForm,
} = require("../controllers/meals-controller");

addNewMealRouter.get("/", showTheAddMealForm);

addNewMealRouter.post("/add", addNewMeal);

module.exports = addNewMealRouter;
