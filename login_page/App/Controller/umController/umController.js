//signup page
const usermodel=require("../../Model/User/signup")

//bcrypt
const bycrypt=require("bcrypt")

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


module.exports=usercontroller
