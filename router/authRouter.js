import { addNewUser } from "../controllers/userController";

const express = require("express");
const authRouter = express.Router();

authRouter.post("/signup", addNewUser)
export default authRouter;