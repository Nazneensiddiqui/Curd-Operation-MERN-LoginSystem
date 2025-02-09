const BookModel=require("../Models/bookModel")

const DataSave=async(req , res)=>{
    const{fnm,lnm, age,cfnm,clnm,snm,add,bdate,ct,coun,pin,pho}=req.body;
    const mydata=await BookModel.create({
        fname:fnm,
        lname:lnm,
        age:age,
        cfname:cfnm,
        clname:clnm,
        school:snm,
        add:add,
        date:bdate,
        city:ct,
        country:coun,
        pincode:pin,
        phone:pho
    })
    res.send(mydata)
}

const DataDisplay=async(req , res)=>{
    const mydata= await BookModel.find();
    res.send(mydata)
}
const DataUpdate=async(req , res)=>{
    const mydata= await BookModel.find();
    res.send(mydata)
}
const DataDelete=async(req , res)=>{
    const {id}=req.body;
    const mydata= await BookModel.findByIdAndDelete(id);
    res.send("data delete")
}

const EditDataDisplay=async(req , res)=>{
 const {id}=req.body;
 const mydata=await BookModel.findById(id)
 res.send(mydata)
}

 const DataEditSave=async(req , res)=>{
   const {_id,fname, lname, age, cfname, clname, school, add, date, city, country, pincode, phone}=req.body;
   const mydata= await BookModel.findByIdAndUpdate(_id ,
    {fname,
     lname, 
     age,
      cfname, 
      clname, 
      school,
       add,
        date, 
        city, 
        country,
         pincode, 
         phone
        })
        res.send("ok")
 }

const DataSearch=async(req , res)=>{
    //console.log(req.body)
   const{input}=req.body;
   const mydata= await BookModel.find({"cfname" : {$regex:input , $options: "i"}});
   res.send(mydata)
}

module.exports={
    DataSave,
    DataDisplay,
    DataUpdate,
    DataDelete,
    EditDataDisplay,
    DataEditSave,
    DataSearch
}