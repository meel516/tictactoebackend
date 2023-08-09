const mongoURI = "mongodb+srv://mdsaleem516:a4dtNSbNPV1KOFHh@cluster0.npkfbjc.mongodb.net/?retryWrites=true&w=majority"
let mongoose = require('mongoose');
const {chatSchema} =require('./model/chat')
const {friendsSchema}=require('./model/friends')
const {userSchema}=require('./model/user')
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
chatDb=mongoose.model('chat',chatSchema)
friendsDb=mongoose.model('friend',friendsSchema)
userDb=mongoose.model('chatuser',userSchema)
exports.chatDb=chatDb
exports.friendsDb=friendsDb
exports.userDb=userDb