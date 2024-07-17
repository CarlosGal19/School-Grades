import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import connectDB from "./config/db.js";

const app = express();

app.use(cors());

app.use(express.json());
connectDB();

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send({ msg: "Hello World!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
