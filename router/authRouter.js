const {addNewUser } = require("../controllers/userController")

const express = require("express");
const authRouter = express.Router();

authRouter.post("/signup", addNewUser)
module.exports = authRouter