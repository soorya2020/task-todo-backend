import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
// import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`server running on http://localhost:${PORT}`);
});
