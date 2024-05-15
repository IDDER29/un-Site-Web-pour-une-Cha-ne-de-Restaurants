const express = require("express");
const os = require("os");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
/*
app.use(async (req, res, next) => {
  const logEntry = `Time: ${new Date().toISOString()}
  IP Address: ${req.ip}
  OS Name: ${os.type()}
  Machine Architecture: ${os.arch()}
  Method: ${req.method}
  URL: ${req.originalUrl}
  Headers: ${JSON.stringify(req.headers)}
  Body: ${JSON.stringify(req.body)}
  -------------------------
  `;

  try {
    await fs.appendFile("request_logs.txt", logEntry);
  } catch (error) {
    console.error("Error writing to log file:", error);
  }

  next();
});*/

// (Home, About, contact, les repas, envoyer un email, ajouter un repas);

//repas, teams, coordonnées de restaurant de la page Home (en utilisant un template engine: ejs);

// -envoyer un email de remerciement aux nouveaux abonnés de la newsletter;

//-Enregistrer toutes les informations necessaires sur les requetes entrantes (en utilisant les middlewares) dans un fichier text (utiliser la methode promise API du module fs);

// L'envoie des emails: nodemailer + un service de l'email marketing (ex: mailchimp, sendGrid,...).

const homeRouter = require("./routers/home-page-router.js");
const aboutRouter = require("./routers/about-router.js");
const contactRouter = require("./routers/contact-router.js");
const addNewMealRouter = require("./routers/meal-router.js");
const restaurantRouter = require("./routers/restaurant-router.js");
const categoryRouter = require("./routers/category-router.js");
const employeeRouter = require("./routers/employee-roter.js");
const newsletterRouter = require("./routers/newsletter-router.js");

app.get("/", (req, res) => {
  res.redirect("/home");
});
app.use("/home", homeRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/meal", addNewMealRouter);
app.use("/restaurant", restaurantRouter);
app.use("/category", categoryRouter);
app.use("/employee", employeeRouter);
app.use("/newsletter", newsletterRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
