const mongoose = require('mongoose')

const schema = mongoose.Schema({
    requestSender: {
        type: String,
        require: true,
    },
    requestReceiver:{
        type: String,
        require: true
    },
    status:{ //"pending", "accepted"
        type: String,
        required: true
    }
})

module.exports = mongoose.model('FriendshipRequest', schema)
