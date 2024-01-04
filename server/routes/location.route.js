import express from 'express';
const locationRoute = express.Router();

import { addlocationFunction, deletelocationFunction, editlocationFunction, showlocationFunction } from '../controllers/location.controller.js';

locationRoute
.post("/add-location",addlocationFunction)
.put("/edit-location/:locationid",editlocationFunction)
.delete("/delete-location/:locationid",deletelocationFunction)
.get("/show-location",showlocationFunction)


export default locationRoute;