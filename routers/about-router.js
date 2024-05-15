const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get("/", async (req, res) => {
  res.render("about");
});

module.exports = aboutRouter;
