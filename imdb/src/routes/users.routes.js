const {Router} = require('express');
const {getAll, create, update, remove} = require('../controllers/users.controller');
const route = Router();

//Endpoints
route.get("/users", getAll); //READ
route.post("/users", create); //CREATE
route.put("/users/:id", update); //UPDATE
route.delete("/users/:id", remove); //DELETE

module.exports = route;