import express from "express";
import morgan from "morgan";
import { connectDB } from "./db.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", authRoutes);

connectDB();

app.listen(5000);
console.log("Servidor corriendo", 5000);
