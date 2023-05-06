const mod=require("./Model")

let list={}
list.home=function(req,res){
    res.json("welcome to home page")
}
list.insert=function(req,res){
    let body=req.body
    new mod(body).save()
    .then((e)=>{res.json(e)})
    .catch((e)=>{res.json(e)})
}
//delete by name
list.delete=function(req,res){
    let name=req.params.name
    mod.findOneAndDelete(name)
    .then((e)=>{res.send(e)})
    .catch((e)=>{res.send(e)})
}
//find by name and update
list.update=function(req,res){
    let name=req.params.name
    let body=req.body
    mod.findOneAndUpdate(name,body,{new:true})
    .then((e)=>{res.send(e)})
    .catch((e)=>{res.send(e)})
    }
//findall data
list.findall=function(req,res){
    mod.find()
    .then((e)=>res.send(e))
    .catch((e)=>res.send(e))

}

//find by name
list.findbyname=function(req,res){
    let name=req.params.name
    mod.find({name:name})
    .then((e)=>res.send(e))
    .catch((e)=>res.send(e))
}
module.exports=list
