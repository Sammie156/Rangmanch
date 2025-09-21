import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: [
        "https://rangmanch-site.netlify.app/"
    ],
    credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at Port ${PORT}`);
});