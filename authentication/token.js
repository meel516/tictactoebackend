let express=require('express')
let secret="saleemschatapp"
let jwt= require('jsonwebtoken')
let verify=express.Router()
verify.use('',(req,res,next)=>{
    const token = req.get('Authorization')
    console.log('hi saleem',token)
    if (!token) return res.status(401).send('Access Denied')
  try{let userdata=jwt.verify(token,secret)
console.log(userdata)
req.username=userdata.username
        next()
}
catch(err){
res.status(403).send('session expired')
}
})
module.exports=verify