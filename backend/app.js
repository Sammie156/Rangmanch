import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
});