const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    userName: String,
    profileImage: String, 
    password: String, 
})

const UserModel = model('User', UserSchema);

module.exports = UserModel