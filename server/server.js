import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import sloganRoutes from "./routes/sloganRoutes.js";
import rewardRoutes from "./routes/rewardRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/slogans", sloganRoutes);
app.use("/api/rewards", rewardRoutes);
app.use("/api/tickets", ticketRoutes);


app.listen(8800,()=>
{
    console.log("Backend server is running! on port 8800");
})

