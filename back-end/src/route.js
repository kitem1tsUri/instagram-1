const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("./controller/post-controller");
const { createUser } = require("./controller/user-controller");

router
  .get("/", (req, res) => {
    res.status("200").json({ message: "alive" });
  })
  .get("/posts", getPosts)
  .post("/posts", createPost)
  // .get('/posts/:id', getPost)
  .post("/", createUser)
  .patch("/posts/:id", updatePost)
  .delete("/posts/:id", deletePost);

module.exports = router;
