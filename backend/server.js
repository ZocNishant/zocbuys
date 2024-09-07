import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectdb from "./config/db.js";

import ProductRoutes from "./routes/productsRoutes.js";

const port = process.env.PORT;

connectdb(); //connect to database mongodb

const app = express();

app.get("/", (req, res) => {
  res.send("API is running.....");
});

app.use("/api/products", ProductRoutes);

app.listen(port, () => console.log(`Server running on ${port}`));
