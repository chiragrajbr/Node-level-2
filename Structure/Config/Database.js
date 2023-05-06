const mongoose=require("mongoose")

const database=function(){
    mongoose.connect("mongodb://localhost:27017")
    .then(()=>{console.log("connected successfully")})
    .catch(()=>{console.log("not connected")})

}
module.exports=database