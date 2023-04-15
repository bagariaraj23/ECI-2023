import express from "express";
const router = express.Router();

import { signUp, login, verifyOtp } from "../controller/userController.js";

router.post("/signup", signUp);
router.post("/signup/verify", verifyOtp);

router.post("/login", login);

export default router;
