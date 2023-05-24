const express=require("express")
const routes=express.Router()
//auth require
const auth=require("../App/Middleware/auth")



//import usercontroller
const usercontroller=require("../App/Controller/umController/umController")

//home page
routes.get("/home",usercontroller.home)
routes.post("/signup",auth.signup,usercontroller.signup)
routes.get("/displaydata",usercontroller.displaydata)

module.exports=routes