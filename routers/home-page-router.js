const express = require("express");
const homeRouter = express.Router();
const homeController = require("../controllers/home-controler");

homeRouter.get("/", homeController.renderTheHomePage);

module.exports = homeRouter;
