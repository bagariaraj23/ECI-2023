import dotenv from "dotenv";
import "express-async-errors";

import cors from "cors";
import cookieParser from "cookie-parser";

import express from "express";
const app = express();

//connect DB
import connectDB from "./db/connect.js";
import authenticateUser from "./middleware/authentication.js"

//Routers
import userRouter from "./routes/userRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";

// import userRoutes from "./routes/userRoutes.js";
// import sloganRoutes from "./routes/sloganRoutes.js";
// import rewardRoutes from "./routes/rewardRoutes.js";
// import ticketRoutes from "./routes/ticketRoutes.js";

//error handler
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/user', reviewRouter)

// app.use("/api/users", userRoutes);
// app.use("/api/slogans", sloganRoutes);
// app.use("/api/rewards", rewardRoutes);
// app.use("/api/tickets", ticketRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

