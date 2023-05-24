const mongoose=require("mongoose")

const isEmail=require("validator/lib/isEmail")
const schema=mongoose.Schema
const  user=new schema({
    username:{
       type: String,
       required:[true,"enter valid user name"],
       unique:true
    },
    email:{
        type:String,
        required:[true,"enter valid email"],
        unique:true,
        validate:{
            validator:(value)=>{
                return isEmail(value)
            },
            message:()=>{
                return "please enter valid email format"
            }
        }
    },
    password:{
        type:String,
        required:true,
        unique:true
    }

    
})


//model creation
const usermodel=mongoose.model("usermodel",user)

module.exports=usermodel
