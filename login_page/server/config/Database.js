//database
const mongoose=require("mongoose")

const datbase=()=>{
    mongoose.connect("mongodb://localhost:27017/login")
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch(()=>{
        console.log("not connected to database")
    })
}

module.exports=datbase


