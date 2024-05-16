const express = require("express");
const aboutRouter = express.Router();
const { renderTheAboutPage } = require("../controllers/about-controler");

aboutRouter.get("/", renderTheAboutPage);

module.exports = aboutRouter;
