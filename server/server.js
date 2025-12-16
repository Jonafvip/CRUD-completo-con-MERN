import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOBD = process.env.MONGO_BD;

mongoose
  .connect(MONGOBD)
  .then(() => {
    console.log("Conexion a la base de datos exitosa");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
