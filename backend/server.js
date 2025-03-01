const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "katiepreed12@gmail.com",
    pass: "password",
  },
});

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "katiepreed12@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error sending email: " + error);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
