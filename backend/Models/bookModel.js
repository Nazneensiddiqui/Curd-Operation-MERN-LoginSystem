const mongoose=require("mongoose")
const bookSchema = new mongoose.Schema({
    fname:{
        type:String,
        require: true
    },
    lname:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        min:10,
        max:25
    },
    cfname:{
        type:String,
        require: true
    },
    clname:{
        type:String,
        require: true
    },
    school:{
        type:String,
        require: true
    },
    add:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    city:{
        type:String,
        require: true
    },
    country:{
        type:String,
        require: true
    },
    pincode:{
        type:Number,
        require: true
    },
    phone:{
        type:Number,
        require: true 

    }

})

module.exports=mongoose.model("Book" , bookSchema)