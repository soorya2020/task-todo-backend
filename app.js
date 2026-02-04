import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
// import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import collectionRouter from "./routes/collection.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://todo.gittogether.co.in"], // Replace with your frontend URL
    credentials: true, // Required for cookies/sessions
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", authRouter);
app.use("/todos", collectionRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`server running on http://localhost:${PORT}`);
});
