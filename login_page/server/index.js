const express=require("express")
const app=express()
app.use(express.json())
const port=3006

//import cors
const cors=require("cors")
app.use(cors())

//import database
const database=require("./config/Database")
database()

//import routes
const routes=require("./config/Routes")
app.use(routes)



app.listen(port,()=>{
    console.log("server is running in the port ",port)
})