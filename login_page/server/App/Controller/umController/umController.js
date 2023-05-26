//signup page
const usermodel=require("../../Model/User/signup")

//bcrypt
const bycrypt=require("bcrypt")
//require jwt
const jwt=require("jsonwebtoken")

const usercontroller={}
//home
usercontroller.home=(req,res)=>{
    res.json("welcome to home page")
}
//signup
/*usercontroller.signup=(req,res)=>{
    const body=req.body
    const data=new usermodel(body)
    bycrypt.genSalt()
    .then((salt)=>{
        bycrypt.hash(data.password,salt)
            .then((encrypt)=>{
                data.password=encrypt
                data.save()
                    .then((value)=>{
                        res.json(value)
                    })
                    .catch((err)=>{
                        res.json(err.message)
                    })
            })
            .catch((err)=>{
                res.json(err.message)
            })
    })
    .catch((err)=>{
        res.json(err)
    })
}*/

//displaydata
usercontroller.displaydata=(req,res)=>{
    usermodel.find()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })

}

//signup
usercontroller.signup=(req,res)=>{
    const body=req.data
    new usermodel(body).save()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

//login
usercontroller.login=(req,res)=>{
    const body=req.body
    usermodel.findOne({email:body.email})
    .then((user)=>{
        bycrypt.compare(body.password,user.password)
               .then((check)=>{
                if(check){
                    const token={
                        _id:user._id,
                        username:user.username,
                        email:user.email
                    }
                    //sign method recives 3 parameters 
                    //essential information like username email
                    //secrect key
                    //expire time
                   const tkn= jwt.sign(token,"psa12",{expiresIn:"5d"})
                   res.json({"token":tkn})
                }else{
                    res.json("please enter valid email or password")
                }
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
usercontroller.profile=(req,res)=>{
    let body=req.user
    res.json(body)
}


module.exports=usercontroller
