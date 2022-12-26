const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    userName: String,
    profileImage: String
})

const UserModel = model('User', UserSchema);

module.exports = UserModel