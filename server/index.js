import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import projectRoutes from "./routes/projects.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://user:Tusharhada@cluster0.ajecg.mongodb.net/collegeResource?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8081;

mongoose.connect(CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

mongoose.set("useFindAndModify", false);

app.listen(PORT, () => {
  console.log("Server Started on port " + PORT);
});

app.use("/projects", projectRoutes);
app.use("/user", userRoutes);

app.get("/", (_, res) => {
  res.send("Hello from the profile backend!");
});

app.get("/:any", (_, res) => {
  res.status(404).json({ message: "404 Page not found" });
});
