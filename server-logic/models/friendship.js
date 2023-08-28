const mongoose = require('mongoose')

const schema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        require: true,
    },
    friends: [String]

})

module.exports = mongoose.model('Friendship', schema)