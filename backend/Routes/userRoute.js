const express=require("express");
const route=express.Router();
const UserControler=require("../Controlers/userControler")
 
route.post("/ragestation",UserControler.DataSave)
route.post("/userlogin" , UserControler.UserLogin)
route.post("/resetpass",UserControler.changePassword)


module.exports=route;