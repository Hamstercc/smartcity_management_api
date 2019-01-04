const Role = require('../models/Role');

exports.save = (req, res) => {
    Role.create(req.body)
    .then( () => {
        res.json({
            "success" : true,
            "message" : "Data successfully saved"
        })
    })
    .catch( err => {
        res.status(500).json({
            "success" : false,
            "message" : err.message || " Please Contact Our Admin"
        })
    })
}

exports.update = (req, res) => {
    Role.findByIdAndUpdate(req.body.id, {
        name : req.body.name
    })
    .then( () => {
        res.json({
            "success" : true,
            "message" : "Data successfully updated"
        })
    })
    .catch( err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                "success" : false,
                "message" : "Data not found with id " + req.body.id
            })
        }
        res.status(500).json({
            "success" : false,
            "message" : err.message || " Please Contact Our Admin"
        })
    })
}

exports.delete = (req, res) => {
    Role.findOneAndDelete({ "_id" : req.body.id})
    .then( () => {
        res.json({
            "success" : true,
            "message" : "Data successfully deleted"
        })
    })
    .catch( err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                "success" : false,
                "message" : "Data not found with id " + req.body.id
            })
        }
        res.status(500).json({
            "success" : false,
            "message" : err.message || " Please Contact Our Admin"
        })
    })
}

exports.get = (req, res) => {
    Role.find()
    .then( collections => {
        res.status(200).json({
            "success" : true,
            "data" : collections
        })
    })
    .catch( err => {
        res.status(500).json({
            "success" : false,
            "message" : err.message || " Please Contact Our Admin"
        })
    })
}

exports.getOne = (req, res) => {
    Role.findById(req.body.id)
    .then( collection => {
        res.status(200).json({
            "success" : true,
            "data" : collection
        })
    })
    .catch( err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                "success" : false,
                "message" : "Data not found with id " + req.body.id
            })
        }
        res.status(500).json({
            "success" : false,
            "message" : err.message || " Please Contact Our Admin"
        })
    })
}