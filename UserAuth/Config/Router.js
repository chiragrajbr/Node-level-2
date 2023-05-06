const express=require("express")
const route=express.Router()
const users=require("../App/Controller/usercontrol")

route.get("/home",users.home)
route.post("/register",users.register)
route.get("/getall",users.getall)
route.post("/login",users.login)
module.exports=route