const { request, response } = require("express");
const UserModel = require("../model/user-model");

exports.getUsers = async (req, res) => {};

exports.createUser = async (req, res) => {
  const createUser = await UserModel.create({ ...req.body });
  res.status(201).json({ message: `New user is created. `, data: createUser });
};

exports.getUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {};

exports.updateUser = async (req, res) => {};
