const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

async function main() {
  // Render templates
  app.get("/", async (req, res) => {
    res.redirect("/home");
  });
  app.get("/home", async (req, res) => {
    res.render("index");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.get("/contact", (req, res) => {
    res.render("contact");
  });
  app.get("/add_A_new_meal", (req, res) => {
    res.render("addNewMeal", { categories: ["hi", "hello"] });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
