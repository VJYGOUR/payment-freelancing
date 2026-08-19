import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.use(cors());
connectDB();

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json({ limit: "20kb" }));
app.use(cookieParser());

const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many inquiries from this IP. Please try again later.",
  },
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
  },
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/inquiries", inquiryLimiter, inquiryRoutes);

app.use("/api/auth/login", loginLimiter);

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);
const clientBuildPath = path.join(__dirname, "../client/dist");

app.use(express.static(clientBuildPath));
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
