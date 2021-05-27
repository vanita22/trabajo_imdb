const {Users} = require('../models');

const getAll = async(req, res, next) => {
    try{
        const results = await Users.findAll({raw: true});
        res.json(results);
    }catch(error){
        next(error);
    }
}

const create = async (req, res) => {
    try{
        const users = await Users.create(req.body);
        res.json(users);
    }catch(error){
        next(error);
    }
}

const update = async (req, res) => {
    try{
        const id = req.params.id;
        const users = await Users.update(req.body, {where: {id}});
        res.json(users);
    }catch(error){
        next(error);
    }
}

const remove = async (req, res) => {
    try{
        const id = req.params.id;
        const users = await Users.destroy({where: {id}});
        res.json(users);
    }catch(error){
        next(error);
    }
}

module.exports = {
    getAll,
    create,
    update,
    remove
}