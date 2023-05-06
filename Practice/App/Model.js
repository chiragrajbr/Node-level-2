const mongoose=require("mongoose")
const table=new mongoose.Schema({
    name:String,
    salaray:Number,
    address:String
})

const mod=mongoose.model("mod",table)

module.exports=mod