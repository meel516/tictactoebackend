let express = require('express')
let {chatDb}=require('./connector')
let bodyParser=require('body-parser')
let url=require('url')
const cors=require('cors') 
let saleem="my first message"
let samplemessage="hi iam saleem"
const friendsapi=require('./friends/friendsapi')
const userapi=require('./users/userapi')
const verify=require('./authentication/token')

let app= express()
app.use(cors())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));
app.listen(5000,()=>console.log('listening on port 3000'))
// app.use('/',(req,res)=>res.end('hi saleem'))
app.get('/getMessage',verify,(req,res)=>{
    async function get(){
        const messages = await chatDb.find({username:req.username,opposite:req.query.opposite})
        const messages1 = await chatDb.find({opposite:req.username,username:req.query.opposite})
      res.send([...messages,...messages1])
    }
    get()
   
})
app.post('/newMessage',verify,(req,res)=>{
    async function sendMessage(){
let  newMessage = new chatDb({username:req.username,opposite:req.body.opposite,message:req.body.message,time:Date.now()})
const messageUpload =await newMessage.save()
res.send(messageUpload)}
sendMessage() 
})
app.use('/friends',verify,friendsapi)
app.use('/users',userapi)
