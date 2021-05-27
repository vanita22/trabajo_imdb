const {Contents} = require('../models');

const getAll = async(req, res, next) => {
    try{
        const results = await Contents.findAll({raw: true});
        res.json(results);
    }catch(error){
        next(error);
    }
}

const create = async (req, res) => {
    try{
        const contents = await Contents.create(req.body);
        res.json(contents);
    }catch(error){
        next(error);
    }
}

const update = async (req, res) => {
    try{
        const id = req.params.id;
        const contents = await Contents.update(req.body, {where: {id}});
        res.json(contents);
    }catch(error){
        next(error);
    }
}

const remove = async (req, res) => {
    try{
        const id = req.params.id;
        const contents = await Contents.destroy({where: {id}});
        res.json(contents);
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