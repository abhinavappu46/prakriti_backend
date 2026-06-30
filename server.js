const express = require("express");
const cors =require("cors");
require("dotenv").config();
const ConsultationRoute=require("./Routes/Consultation");


const app=express();



app.use(express.json());
app.use(cors({
    origin:"https://prakriti-interior-design.onrender.com"
}));
app.use("/consultation",ConsultationRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is runing");
})