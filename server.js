import express from "express";
import cookieParser from "cookie-parser";
import config from "./server/config/config.js";
import userRoutes from "./server/routes/userRoutes.js";
import authRoutes from "./server/routes/authRoutes.js";
// DB connection
// import "../server/config/dbConnection.js";
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
///////////////////////////
const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);
app.use("/", authRoutes);
app.get("/", (req, res) => {
  res.json({ massage: " Welcome to ConnectHub!" });
});
// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  }
});

app.listen(config.port, () => {
  console.log(`🚀 at port ${config.port}`);
});
