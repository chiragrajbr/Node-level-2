const mongoose=require("mongoose")
const validator=require("validator")

const employee=new mongoose.Schema({
    eName:String,
    eId:Number,
    eSalary:Number,
    ePhoneno:{
        //customized validation
        type:String,
        minLength:10,
        maxLength:10,
        required:true,
        validate:{
            validator:function(value){
                return validator.isNumeric(value)
            },
            message:function(){
                return ("mobile number should contain only numbers")
            }
        }
    }
    
})

const emplist=mongoose.model("emplist",employee)

module.exports=emplist