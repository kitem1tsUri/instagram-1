const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    description: String,
    userId: String,
    userName: String,
    userProfile: String,
    like: Number,
    password: String, 
    images: [String]
})

const PostModel = model('Post', PostSchema);

module.exports = PostModel