const mongoose=require("mongoose")

const Mongodb=()=>{
    mongoose.connect("mongodb://localhost:27017/Employe")
            .then(()=>{console.log("connected successfully")})
            .catch((e)=>{ console.log(e)})
}

module.exports=Mongodb