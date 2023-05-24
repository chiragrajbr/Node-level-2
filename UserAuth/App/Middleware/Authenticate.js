/*
//import jwt
const jwt=require("jsonwebtoken")
//import schema
const user=require("../Model/usermodel")
//middle ware
let Authenticate=(req,res,next)=>{
    let token=req.header("Authorization")
    let tokendata
   try{
    auth=jwt.verify(token,"psa123")
    user.findById(tokendata._id)
                .then((user)=>{
                    req.user=user
                    next()
                })
                .catch((e)=>{
                    res.json(e)
                })
      }
   catch(e){
    res.json(e)
   }
}

module.exports={
    Authenticate
}
*/