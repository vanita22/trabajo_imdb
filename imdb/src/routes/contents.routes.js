const {Router} = require('express');
const {getAll, create, update, remove} = require('../controllers/contents.controller');
const route = Router();

//Endpoints
route.get("/contents", getAll); //READ
route.post("/contents", create); //CREATE
route.put("/contents/:id", update); //UPDATE
route.delete("/contents/:id", remove); //DELETE

module.exports = route;