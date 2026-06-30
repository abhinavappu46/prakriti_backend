const express = require("express");
const cors =require("cors");
require("dotenv").config();
const ConsultationRoute=require("./Routes/Consultation");


const app=express();


console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
app.use(express.json());
app.use(cors());
app.use("/consultation",ConsultationRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is runing");
})