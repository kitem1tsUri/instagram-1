const bcrypt = require("bcrypt")
// import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(1);
const hash = bcrypt.hashSync("kesh123" , salt); 
console.log(hash)