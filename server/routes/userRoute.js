import express from "express";
import {
  create,
  deleteUserById,
  getAllUser,
  getUserById,
  update,
} from "../controller/userController.js";

const route = express.Router();

route.post("/user", create); //crear
route.get("/users", getAllUser); //traer todos los datos
route.get("/user/:id", getUserById); //traer usuario por id
route.put("/update/user/:id", update); //actualizar
route.delete("/delete/user/:id", deleteUserById); //eliminar

export default route;
