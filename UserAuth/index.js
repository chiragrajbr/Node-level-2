const express=require("express")
const app=express()

const port=3006
//database
const mongodb=require("./Config/Database")
mongodb()
//import route
const route=require("./Config/Router")
app.use(express.json())
app.use(route)





app.listen(port,()=>{
    console.log("server is running in the port",port)
})