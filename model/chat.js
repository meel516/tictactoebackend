const { Schema, mongo } = require('mongoose');
const chatSchema = new Schema({
    username: Schema.Types.String,
    opposite:Schema.Types.String,
    message: Schema.Types.String,
    time: Schema.Types.String
})
exports.chatSchema=chatSchema;