let express=require("express")
let app=express()
app.use(express.json())
//import mongodb
const mongodb=require("./Config/Database")
//import task
const taskcontroller=require("./App/Controller/Control")
let port=3008

app.get("/",taskcontroller.call)
app.post("/insert",taskcontroller.insert)
app.get("/findall",taskcontroller.findall)


mongodb()

app.listen(port,()=>{
    console.log("server is running in the port",port)
})