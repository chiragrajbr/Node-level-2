const user=require("../Model/usermodel")
const bcrypt=require("bcryptjs")
//const jwt=require("jsonwebtoken")

const users={}

users.home=(req,res)=>{
    res.json("welcome to home page")
}
//convert into bcrypt
users.register=(req,res)=>{
                            let body=req.body
                           let reg=new user(body)
                           bcrypt.genSalt()
                                 .then((salt)=>{
                                    bcrypt.hash(reg.password,salt)
                                    .then((encrypted)=>{
                                        reg.password=encrypted
                                        reg.save()
                                        .then((body)=>{
                                            res.json(body)
                                        })
                                        .catch((e)=>{
                                            res.json(e)
                                        })
                                    })
                                    
                                 })
                        }
//to get all data
users.getall=(req,res)=>{
    user.find()
    .then((e)=>{
        res.json(e)
      })
    .catch((e)=>{
         res.json(e)
       })

}
//insert
users.insert=(req,res)=>{
    let body=req.body
    new user(body).save()
    .then((a)=>{
        res.json(a)
    })
    .catch((e)=>{
        res.json(e)
    })
          
}

//login
users.login=(req,res)=>{
    let body=req.body
    user.findOne({email:body.email})
    .then((user)=>{
        if(!user){
            res.json("wrong email or password ")
        }
        bcrypt.compare(body.password,user.password)
        .then((match)=>{
            if(match){
                res.json(user)
            }
            else{
                res.json("wrong email")
            }
        })
        
    })
}

//useraccount 
//users.getaccount=(req,res)=>{
 //   res.json(req.user)
//}

module.exports=users