const { request, response } = require("express");
const UserModel = require("../model/user-model");
const bcrypt = require("bcrypt");

// exports.getUsers = async (req, res) => {};

exports.createUser = async (req, res) => {
  console.log(req.body);
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(req.body.password, salt);
  console.log(hash)
  const createUser = await UserModel.create({
    password: hash,
    userName: req.body.userName,
  });
  res.status(201).json({ message: `New user is created. `, data: createUser });
};

exports.logIn = async (req, res) => {
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(req.body.pass, salt);
  console.log(hash)
  try {
    console.log(hash)
    console.log("huuye");
    const { name, pass } = req.body;
    const user = await UserModel.findOne({
      userName: name,
    });
    console.log(user);
    if (user) {
      if (pass === user.password) {
        res.send(user);
      } else {
        res.send("uncorrect password");
      }
    } else {
      res.send("user not found");
    }

    // res.status(200).json({
    //   message: true,
    //   data: user,
    // });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};

exports.deleteUser = async (req, res) => { };

exports.updateUser = async (req, res) => { };
// exports.login = async (req, res) => {
//  const login = await
// };
