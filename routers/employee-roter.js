const express = require("express");
const employeeRouter = express.Router();
const employeeController = require("../controllers/employee-controler");

employeeRouter.get("/", employeeController.showAllTheEmployees);
employeeRouter.post("/add", employeeController.addNewEmployee);
employeeRouter.put("/edit/:id", employeeController.editEmployee);

module.exports = employeeRouter;
