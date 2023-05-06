const express=require("express")
const router=express.Router()
//importing controller
 let Controller=require("../App/control/Control")
  router.get("/view",Controller.view)
  router.post("/create",Controller.create)
module.exports=router