const mongoose = require('mongoose')

const RoleSchema = mongoose.Schema({
    name : {
        type : String,
        lowercase : true,
        required : [true, 'Name is required']
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('Role', RoleSchema)