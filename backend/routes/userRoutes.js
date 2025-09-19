import express from "express";
import { registerUser, loginUser, testAPI } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/test", testAPI);

export default router;