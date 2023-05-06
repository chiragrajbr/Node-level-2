const mongoose=require("mongoose")
const mongodb=function(){
    mongoose.connect("mongodb://localhost:27017/users")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("not connected")
})

}

module.exports=mongodb
