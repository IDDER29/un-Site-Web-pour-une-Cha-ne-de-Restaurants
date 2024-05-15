const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  // Render templates
}

const showAllTheRestorents = async (req, res) => {
  const restaurantes = await prisma.Restaurant.findMany();
};

const addNewRestaurant = async (req, res) => {
  console.log("hi i'n runing but :");
  try {
    const { Name, Address, Phone, Email, Image } = await req.body;
    const newRestaurant = await prisma.Restaurant.create({
      data: {
        Name,
        Address,
        Phone,
        Email,
        Image,
      },
    });
    console.log("the restorent was added :", newRestaurant);
    res.status(201).json(newRestaurant);
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

module.exports = { showAllTheRestorents, addNewRestaurant };
