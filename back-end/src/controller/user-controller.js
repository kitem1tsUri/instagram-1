const { request, response } = require("express");
const UserModel = require("../model/user-model");

// exports.getUsers = async (req, res) => {};

exports.createUser = async (req, res) => {
  console.log(req);
  const createUser = await UserModel.create({ ...req.body });
  res.status(201).json({ message: `New user is created. `, data: createUser });
};

exports.getUser = async (req, res) => {
  try {
    const users = await UserModel.findOne({
      userName: req.body.name,
      password: req.body.pass,
    });
    res.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};

exports.deleteUser = async (req, res) => {};

exports.updateUser = async (req, res) => {};
// exports.login = async (req, res) => {
//  const login = await
// };
