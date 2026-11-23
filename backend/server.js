import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("🎵 Music API Running...");
});

const PORT = process.env.PORT || 5000;

await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});