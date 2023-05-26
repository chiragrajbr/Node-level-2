//trying bcrypt in middleware
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const usermodel=require("../Model/User/signup")


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

//profile
auth.profile=(req,res,next)=>{
    const token=req.headers.authorization
    let tokendata;
    try{
       tokendata= jwt.verify(token,"psa12")
        usermodel.findById(tokendata._id)
        .then((user)=>{
            req.user=user
            next()
        })
        .catch((err)=>{
            res.json(err.message)
        })
    }
    catch(err){
        res.json(err.message)
    }

}

module.exports=auth