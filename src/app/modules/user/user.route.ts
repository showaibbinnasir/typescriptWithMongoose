import express  from "express";
import { createUser, getUserById, getUsers } from "./user.controller";

const route = express.Router();

route.get('/', getUsers);
route.get('/get-user/:id', getUserById)
route.post('/create-user', createUser)

export default route;