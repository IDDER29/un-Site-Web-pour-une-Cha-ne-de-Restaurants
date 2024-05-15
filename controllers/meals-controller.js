const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
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
  res.render("addNewMeal", { categories: ["hi", "how are you"] });
};

const addNewMeal = async (req, res) => {
  try {
    const { Name, Description, Price, Image, CategoryID, RestaurantID } =
      await req.body;
    const NewMeal = await prisma.Meal.create({
      data: {
        Name,
        Description,
        Price,
        Image,
        CategoryID,
        RestaurantID,
      },
    });
    console.log("the restorent was added :", NewMeal);
    res.res.status(201).json(NewMeal);
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
