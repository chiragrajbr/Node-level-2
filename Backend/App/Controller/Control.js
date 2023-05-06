//importing task from the model
const Task=require("../Model/Task")

const taskcontroller={}
    taskcontroller.call=(req,res)=>{
        res.send("welcome to task page")
    }
    taskcontroller.insert=(req,res)=>{
        let body=req.body
        new Task(body).save()
        .then((e)=>{res.json(e)})
        .catch((e)=>{res.json(e)})
    }
    taskcontroller.findall=(req,res)=>{
        Task.find()
        .then((e)=>{res.json(e)})
        .catch((e)=>{res.json(e)})
    }
    

module.exports=taskcontroller