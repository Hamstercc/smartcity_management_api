module.exports = (err, req, res, next) => {
    if(err.name == 'ValidationError')
    {
        return res.status(500).json({
            "success" : false,
            "message" : err.message || " Please Contact Our Admin"
        })
    }

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
}