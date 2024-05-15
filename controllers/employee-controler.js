const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  // Render templates
}

const showAllTheEmployees = async (req, res) => {
  const Employees = await prisma.Employee.findMany();
  res.status(200).json(Employees);
};

const showAllTheChefs = async (req, res) => {
  const Chefs = await prisma.Employee.findMany({
    where: {
      Role: "CHEF",
    },
  });

  return Chefs;
};

const addNewEmployee = async (req, res) => {
  try {
    const { FirstName, LastName, image, Role, RestaurantID } = await req.body;
    const NewEmployee = await prisma.Employee.create({
      data: {
        FirstName,
        LastName,
        image,
        Role,
        RestaurantID,
      },
    });
    console.log("the restorent was added :", NewEmployee);
    res.status(200).json(NewEmployee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const editEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const Edites = req.body;
    const EmployeeToUpdate = await prisma.Employee.update({
      where: {
        EmployeeID: parseInt(id),
      },
      data: Edites,
    });
    res.status(200).json(EmployeeToUpdate);
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
  showAllTheEmployees,
  addNewEmployee,
  showAllTheChefs,
  editEmployee,
};
