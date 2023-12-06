import express from "express";
import bodyParser from "body-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import config from "./server/config/config.js";
import userRoutes from "./server/routes/userRoutes.js";
import authRoutes from "./server/routes/authRoutes.js";
import path from "path";
// DB connection
import mongoose from "mongoose";
const URI = config.mongoURI;
mongoose.connect(URI);

// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Default Connection");
});

// When connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Default Connection Error : " + err);
});

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
console.log(CURRENT_WORKING_DIR);
app.use(express.static(path.join(CURRENT_WORKING_DIR, "./dist/app")));
// middleware functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/", userRoutes);
app.use("/", authRoutes);
app.get("/", (req, res) => {
  res.json({ message: " Welcome to ConnectHub!" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // Add other CORS headers as needed

  if (req.method === "OPTIONS") {
    // Preflight request, respond immediately
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).send();
  }

  next();
});
app.listen(config.port, () => {
  console.log(`🚀 at port ${config.port}`);
});
