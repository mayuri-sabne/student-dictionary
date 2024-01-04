import express from 'express';
const studentRoute = express.Router();

import {edit,deletes,register,show,showById} from '../controllers/student.controller.js';

studentRoute
.post("/register",register)
.put("/edit/:userid",edit)
.delete("/delete/:userid",deletes)
.get("/show",show)
.get("/show/:userid",showById)


export default studentRoute;