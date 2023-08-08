const { Schema, mongo } = require('mongoose');
const friendsSchema = new Schema({
    username: Schema.Types.String,
    friends:[Schema.Types.String]
    
})
exports.friendsSchema=friendsSchema;