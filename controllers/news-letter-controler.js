const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const nodemailer = require("nodemailer");
async function main() {
  // Render templates
}

const sendEmail = async (req, res) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // or 'STARTTLS'
    auth: {
      user: "apprenant.apprenant4@talents4starups.com",
      pass: "upbnU$5q",
    },
  });

  var mailOptions = {
    from: "apprenant.apprenant4@talents4starups.com",
    to: req.body.email,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  const newsletter = await prisma.newsletter.findUnique({
    where: { Email: req.body.email },
  });

  if (newsletter) {
    transporter.sendMail(
      {
        ...mailOptions,
        subject: "You are already registred in the newsletter",
        text: `You are already registred in the newsletter`,
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
    console.log("the email is sent to the user that is already registred");
    res.redirect("/home");
  } else {
    const newNewsletter = await prisma.newsletter.create({
      data: {
        Email: req.body.email,
      },
    });

    transporter.sendMail(
      {
        ...mailOptions,
        subject: "Congratulations, you are registred in the newsletter",
        text: `Congratulations, you are registred in the newsletter, `,
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
    console.log("the email is sent to the new user");
    res.redirect("/home");
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

module.exports = { sendEmail };
