const express = require("express");
const contactRouter = express.Router();
const { renderTheContactPage } = require("../controllers/contact-controler");

contactRouter.get("/", renderTheContactPage);

module.exports = contactRouter;
