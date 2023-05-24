//trying bcrypt in middleware
const bcrypt=require("bcrypt")


const auth={}

auth.signup=(req,res,next)=>{
    const body=req.body
    bcrypt.genSalt()
    .then((salt)=>{
        bcrypt.hash(body.password,salt)
        .then((encrypt)=>{
            body.password=encrypt
            req.data=body
            next()
        })
        .catch((err)=>{
            res.json(err.message)
        })
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

module.exports=auth