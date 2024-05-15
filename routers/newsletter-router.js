const express = require("express");
const newsletterRouter = express.Router();
const { sendEmail } = require("../controllers/news-letter-controler");

newsletterRouter.post("/sendEmail", sendEmail);

module.exports = newsletterRouter;
