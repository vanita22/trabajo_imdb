const {Actors} = require('../models');

const getAll = async(req, res, next) => {
    try{
        const results = await Actors.findAll({raw: true});
        res.json(results);
    }catch(error){
        next(error);
    }
}

const create = async (req, res) => {
    try{
        const actor = await Actors.create(req.body);
        res.json(actor);
    }catch(error){
        next(error);
    }
}

const update = async (req, res) => {
    try{
        const id = req.params.id;
        const actor = await Actors.update(req.body, {where: {id}});
        res.json(actor);
    }catch(error){
        next(error);
    }
}

const remove = async (req, res) => {
    try{
        const id = req.params.id;
        const actor = await Actors.destroy({where: {id}});
        res.json(actor);
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
