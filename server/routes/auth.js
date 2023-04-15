import express from "express";
const router = express.Router();

import {login} from "../controller/auth.js";
import {register} from "../controller/auth.js";

router.post("/register", register );
router.post("/login", login);

export default router;