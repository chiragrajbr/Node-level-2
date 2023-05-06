const mod=require("../Model/model")
const Controller={}

//to create
Controller.create=(req,res)=>{
    let body=req.body
    new mod(body).save()
    .then((e)=>{res.json(e)})
    .catch((e)=>{res.json(e)})
}

//to view data
Controller.view=(req,res)=>{
    mod.find()
    .then((e)=>{res.json(e)})
    .catch((e)=>{res.json(e)})
}

module.exports=Controller