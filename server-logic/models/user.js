const mongoose = require('mongoose')

const schema = mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    fullName: {
        type: String,
        require: true
    },
    avatarFileName: {
        type: String,
        require: true
    },
    // friends: [String],
    // gameStats:
    // {
    //     wins: Number,
    //     losses: Number
    // }

})

module.exports = mongoose.model('Users', schema)