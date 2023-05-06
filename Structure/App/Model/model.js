const mongoose=require("mongoose")

const employee=new mongoose.Schema({
    eName:String,
    eId:Number,
    eSalary:Number
    
})

const emplist=mongoose.model("emplist",employee)

module.exports=emplist