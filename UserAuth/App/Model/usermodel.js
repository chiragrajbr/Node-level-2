const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name required"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "please enter valid email format"
            }
        }
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:5,
        maxLength:128
    }
})

const user=mongoose.model("user",schema)

module.exports=user