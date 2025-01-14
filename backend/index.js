const express=require("express");
const app=express();

require("dotenv").config();
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")

const userRoute=require("./Routes/userRoute")
const bookRoute=require("./Routes/bookRoute")


const port=process.env.PORT || 9000;
 const dbcon=process.env.DBCON;

mongoose.connect(dbcon).then((res)=>{
    console.log("DB Connected")
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/users" , userRoute);
app.use("/books" , bookRoute);

app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})