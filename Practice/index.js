const express=require("express")
const database = require("./Config/Database")
const app=express()
app.use(express.json())
const Database=require("./Config/Database")
const Control=require("./App/Control")
let port=3009

Database()

app.get("/home",Control.home)
app.post("/insert",Control.insert)
app.delete("/delete/:name",Control.delete)
app.put("/update/:name",Control.update)
app.get("/findall",Control.findall)
app.get("/findbyname/:name",Control.findbyname)

app.listen(port,()=>{
    console.log("port is running in the server",port)
})

