const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a SMTP transporter for gmail
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karanim594@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email details (example)
// let mailOptions = {
//   from: "karanim594@gmail.com",
//   to: "recipient@example.com",
//   subject: "Test Email from Nodemailer and Gmail",
//   text: "Hello from Nodemailer using Gmail!",
// };

const sendMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

module.exports = sendMail;
