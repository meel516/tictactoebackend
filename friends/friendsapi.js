let express=require('express')
const { friendsDb } = require('../connector')
const router=express.Router()
router.get('/friendslist',async (req,res)=>{
    console.log('entered')
const list = await friendsDb.find({username:req.username})
res.send(list)
})
router.post('/addfriend',async (req,res)=>{
    let newfriend=req.body.opposite
    let status = await friendsDb.findOneAndUpdate({username:req.body.username},{$push:{friends:newfriend}})
    res.send(status)
})
router.post('/createprofile',async (req,res)=>{
    let newprofile = new friendsDb({username:req.body.username,friends:[]})
    let conformation = await newprofile.save()
    res.send(conformation)
})
module.exports=router