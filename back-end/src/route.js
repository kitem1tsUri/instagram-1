const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("./controller/post-controller");
const { createUser, getUser } = require("./controller/user-controller");

router
  // .get("/", (rs
  .get("/posts", getPosts)
  .post("/posts", createPost)
  // .get('/posts/:id', getPost)
  .get("/", getUser)
  .post("/", createUser)
  .patch("/posts/:id", updatePost)
  .delete("/posts/:id", deletePost);

module.exports = router;
