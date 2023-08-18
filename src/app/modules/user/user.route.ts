import express  from "express";
import { createUser, getUsers } from "./user.controller";

const route = express.Router();

route.get('/', getUsers);
route.post('/create-user', createUser)

export default route;