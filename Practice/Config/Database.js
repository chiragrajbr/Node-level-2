const mongoose=require("mongoose")
const  Database=()=>{
    mongoose.connect("mongodb://localhost:27017")
    .then(()=>{console.log("connected successfully")})
    .catch((e)=>{console.log(e)})
}

module.exports=Database
