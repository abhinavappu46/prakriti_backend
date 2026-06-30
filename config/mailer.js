
require("dotenv").config();
const nodemailer=require("nodemailer");


const transporter=nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
transporter.verify(function (error, success) {
    if (error) {
        console.log("Transport Error:");
        console.log(error);
    } else {
        console.log("Mail server is ready.");
    }
});
module.exports = transporter;