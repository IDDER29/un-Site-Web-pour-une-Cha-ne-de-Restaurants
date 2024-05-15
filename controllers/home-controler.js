const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { showAllTheMelas, addNewMeal } = require("./meals-controller");
const { showAllTheChefs } = require("./employee-controler");
async function main() {
  // Render templates
}

const renderTheHomePage = async (req, res) => {
  const meals = await showAllTheMelas();
  const Chefs = await showAllTheChefs();
  console.log(meals);
  await res.render("index", { meals, Chefs });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = { renderTheHomePage };
