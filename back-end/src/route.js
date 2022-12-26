const express = require('express');
const router = express.Router();
const { getPosts, createPost, getPost, deletePost, updatePost } = require('./controller');

router
    .get('/', (req, res) => { res.status('200').json({ message: 'alive' }) })
    .get('/posts', getPosts)
    .post('/posts', createPost)
    .get('/posts/:id', getPost)
    .patch('/posts/:id', updatePost)
    .delete('/posts/:id', deletePost)

module.exports = router