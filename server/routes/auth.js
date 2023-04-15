import express from "express";
const router = express.Router();

// import login from "../controller/auth.js";
// import register from "../controller/auth.js";

router.post("/register", async (req, res) => {
    console.log("login");
});
router.post("/login", async (req, res) => {
    console.log("register");
});

export default router;