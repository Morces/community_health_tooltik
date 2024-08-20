import nodemailer from "nodemailer";
require("dotenv").config();

// Create a SMTP transporter for gmail
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "itsmunyasia@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async (mailOptions) => {
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error?.message);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

module.exports = sendMail;
