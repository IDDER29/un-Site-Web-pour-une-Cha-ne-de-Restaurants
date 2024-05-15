const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  // Render templates
}

const showAllTheCategories = async (req, res) => {
  const categories = await prisma.Category.findMany();
  res.status(200).json(categories);
};

const addNewCategory = async (req, res) => {
  try {
    const { Name, Image } = await req.body;
    const newCategory = await prisma.Category.create({
      data: {
        Name,
        Image,
      },
    });
    console.log("the category was added :", newCategory);
    res.status(201).json(newCategory);
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

module.exports = {
  showAllTheCategories,
  addNewCategory,
};
