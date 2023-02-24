const router = require('express').Router()
const User = require('../Models/user_model')

router.get("/back",(req,res) =>{
    res.render("userAuth")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
 })
 
 router.get("/login",(req,res)=>{
     res.render("login")
  })
 
  
//SignIn
router.post("/signup",async(req,res) =>{
    try{
        const userAuth = new User({
            email:req.body.email,
            password:req.body.password
    })
    const newUser = await userAuth.save()
    console.log(newUser)
    console.log("Successfully Signedup")
    res.redirect("https://www.google.com/intl/en_in/chrome/")
    
    }
    catch(err){
        console.log(err)
    }
})

//Login

router.post("/login", async(req,res) => {
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            res.send("User not found")
        }

        const password = await User.findOne({password: req.body.password})
        if(!password){
            res.send("Please enter correct password")
        }
        
        else{
            res.redirect("https://www.google.com/intl/en_in/chrome/")
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router