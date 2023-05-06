const express=require("express")
const app=express()
app.use(express.json())
const port=3006

//import router
const router=require("./Config/Router")
app.use(router)

//import database
const database=require("./Config/Database")
database()

app.listen(port,()=>{
    console.log("server is running in the port",port)
})

