import express from "express";
import { registerUser, loginUser, testAPI } from "../controllers/userController.js";

const user_router = express.Router();

user_router.post("/register", registerUser);
user_router.post("/login", loginUser);
user_router.post("/test", testAPI);

export default user_router;