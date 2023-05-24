const express=require("express")
const route=express.Router()
const users=require("../App/Controller/usercontrol")
//import middleware
//const {Authenticate}=require("../App/Middleware/Authenticate")

route.get("/home",users.home)
route.post("/register",users.register)
route.get("/getall",users.getall)
route.post("/insert",users.insert)
route.post("/login",users.login)
//route.get("/useraccount",Authenticate,users.getaccount)

module.exports=route