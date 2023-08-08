const mongoURI = "mongodb+srv://mdsaleem516:a4dtNSbNPV1KOFHh@cluster0.npkfbjc.mongodb.net/?retryWrites=true&w=majority"
let mongoose = require('mongoose');
const {chatSchema} =require('./model/chat')
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
chatDb=mongoose.model('chat',chatSchema)
exports.chatDb=chatDb