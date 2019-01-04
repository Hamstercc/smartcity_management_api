const mongoose = require('mongoose')

const RoleSchema = mongoose.Schema({
    name : {
        type : String,
        lowercase : true,
        validate : {
            validator: (v) => {
                return /^[a-zA-Z\s]+$/.test(v)
            },
            message : () => 'Only String Accepted'
        },
        required : [true, 'Name is required'],
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('Role', RoleSchema)