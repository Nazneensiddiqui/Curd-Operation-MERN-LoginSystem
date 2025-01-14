const express=require("express");
const route=express.Router();
const bookControler=require("../Controlers/bookControler")

route.post("/datasave",bookControler.DataSave);
route.get("/datadisplay",bookControler.DataDisplay)
route.get("/dataupdate",bookControler.DataUpdate)
route.post("/datadelete",bookControler.DataDelete)
route.post("/editdatadisplay",bookControler.EditDataDisplay)
route.post("/editdatasave", bookControler.DataEditSave)
route.post("/datasearch",bookControler.DataSearch)


module.exports=route;