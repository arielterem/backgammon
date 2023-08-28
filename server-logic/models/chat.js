const mongoose = require('mongoose')

const schema = mongoose.Schema({
    participants: [
        {
            userId: String
        }
    ],
    messages: [
        {
            sender: String,
            message: String,
            timeStamp: Date,
            read: Boolean
        }
    ]
})

module.exports = mongoose.model('chat', schema)
