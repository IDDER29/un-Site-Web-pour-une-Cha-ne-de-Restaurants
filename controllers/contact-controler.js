const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { showAllTheChefs } = require("./employee-controler");
const {
  showAllTheRestorents,
  addNewRestaurant,
} = require("./restaurants-controler");
async function main() {
  // Render templates
}

const renderTheContactPage = async (req, res) => {
  const Chefs = await showAllTheChefs();
  const restaurants = await showAllTheRestorents();
  const restaurant = restaurants[0];
  await res.render("contact", { Chefs, restaurant });
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

module.exports = { renderTheContactPage };
