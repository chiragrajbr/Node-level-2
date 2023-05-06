const mongoose=require("mongoose")

let Employees=new mongoose.Schema({
    eId:Number,
    eName:String,
    eSalary:Number
})
//create model
const Task=mongoose.model("Task",Employees) 

//export the model
module.exports=Task