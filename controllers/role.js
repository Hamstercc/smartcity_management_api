const Role = require('../models/Role');

exports.save = (req, res, next) => {
    Role.create(req.body)
    .then( () => {
        res.json({
            "success" : true,
            "message" : "Data successfully saved"
        })
    })
    .catch(next)
}

exports.update = (req, res, next) => {
    Role.findByIdAndUpdate(req.body.id, {
        name : req.body.name
    })
    .then( () => {
        res.json({
            "success" : true,
            "message" : "Data successfully updated"
        })
    })
    .catch(next)
}

exports.delete = (req, res, next) => {
    Role.findOneAndDelete({ "_id" : req.body.id})
    .then( () => {
        res.json({
            "success" : true,
            "message" : "Data successfully deleted"
        })
    })
    .catch(next)
}

exports.get = (req, res, next) => {
    Role.find()
    .then( collections => {
        res.status(200).json({
            "success" : true,
            "data" : collections
        })
    })
    .catch(next)
}

exports.getOne = (req, res, next) => {
    Role.findById(req.body.id)
    .then( collection => {
        res.status(200).json({
            "success" : true,
            "data" : collection
        })
    })
    .catch(next)
}