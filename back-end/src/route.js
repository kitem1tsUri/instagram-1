const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("./controller/post-controller");

const { createUser, logIn } = require("./controller/user-controller");

router
  // .get("/", (rs
  .get("/posts", getPosts)
  // .post("/posts", createPost)
  // .get('/posts/:id', getPost)
  // .post("/login", logIn)
  .post("/", createUser)
  .patch("/posts/:id", updatePost)
  .delete("/posts/:id", deletePost);

module.exports = router;
