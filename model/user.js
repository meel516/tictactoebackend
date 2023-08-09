const { Schema, mongo } = require('mongoose');
const userSchema = new Schema({
    username: Schema.Types.String,
    password:Schema.Types.String
    
})
exports.userSchema=userSchema;