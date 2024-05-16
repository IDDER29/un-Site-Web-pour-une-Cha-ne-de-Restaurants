const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  showAllTheRestorents,
  addNewRestaurant,
} = require("./restaurants-controler");
const { showAllTheCategories } = require("./category-controler");

async function main() {
  // Render templates
}

const showAllTheMelas = async (req, res) => {
  const meals = await prisma.Meal.findMany({
    include: {
      Category: true,
    },
  });
  return meals;
};

const showTheAddMealForm = async (req, res) => {
  const restaurants = await showAllTheRestorents();
  const Categorys = await showAllTheCategories();
  const restaurant = restaurants[0];
  res.render("addNewMeal", {
    Categorys,
    restaurant,
  });
};

const addNewMeal = async (req, res) => {
  try {
    const { Name, Description, Price, CategoryID, RestaurantID } =
      await req.body;
    const img = "img/" + req.file.filename;

    const NewMeal = await prisma.Meal.create({
      data: {
        Name,
        Description,
        Price: +Price,
        Image: img,
        CategoryID: +CategoryID,
        RestaurantID: 1,
      },
    });
    res.redirect("/meal");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
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

module.exports = { showAllTheMelas, addNewMeal, showTheAddMealForm };
