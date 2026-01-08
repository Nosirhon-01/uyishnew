import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routers/users.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

app.listen(3000, () => console.log("Server running"));
