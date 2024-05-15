const express = require("express");
const categoryRouter = express.Router();
const {
  showAllTheCategories,
  addNewCategory,
} = require("../controllers/category-controler");

categoryRouter.get("/", showAllTheCategories);

categoryRouter.post("/add", addNewCategory);

module.exports = categoryRouter;
