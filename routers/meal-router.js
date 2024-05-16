const express = require("express");
const addNewMealRouter = express.Router();
const {
  showAllTheMelas,
  addNewMeal,
  showTheAddMealForm,
} = require("../controllers/meals-controller");
const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    const name = file.originalname.split(" ").join("_");
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

addNewMealRouter.post("/add", upload.single("Image"), addNewMeal);
addNewMealRouter.get("/", showTheAddMealForm);

module.exports = addNewMealRouter;
