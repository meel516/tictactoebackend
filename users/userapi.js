let express=require('express')
let secret="saleemschatapp"
let jwt= require('jsonwebtoken')
let userroute=express.Router()
let {userDb}=require("../connector")
userroute.post('/login',async (req,res)=>{try{
    const confirmation= await userDb.findOne({username:req.body.username})
    if(confirmation.password===req.body.password){
       let token =jwt.sign({username:req.body.username,exp:Math.floor(Date.now()/1000)+(60*60)},secret)
        res.send(token)
    }
    else{
        res.send('username or password didnt match')
    }}
    catch(err){
        console.log(err)
    }
})
userroute.post('/createnewuser',async (req,res)=>{
 const newuser = new userDb({
    username:req.body.username,
    password:req.body.password
 })
 const uploading = await newuser.save()
 res.send(uploading)

})
module.exports=userroute