const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const friendshipRoute = require('./routes/friendshipRoute')
const http = require('http')
const io = require('socket.io');
const { Http2ServerRequest } = require('http2');
const app = express()
const httpServer = http.createServer(app)
const ioServer = io(httpServer, {
    cors: {
        origin: ['http://localhost:4200']
    }
})

const DBurl = 'mongodb://127.0.0.1:27017/backgammon'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.use('/users', userRoute) //create new table
app.use('/friendships', friendshipRoute) //create new table

let onlineUsers = []

ioServer.on('connection', (socket) => {
    console.log('user connected');

    socket.on('onNewTask', (task) => {
        // socket.broadcast.emit('newTaskUploaded', task); //send message to all but not back to sender
        // socket.emit('newTaskUploaded', task); //to sender only
        ioServer.emit('newTaskUploaded', task); //send message to all the client including sender
    })

    socket.on('onRemovingTask', (task) => {
        ioServer.emit('taskRemoved', task);
    })
    
    socket.on('onEditingTask', (task) => {
        ioServer.emit('taskEdited', task);
    })

    socket.on('onUserConnect', (user) => {
        onlineUsers.push({_id: user.id, fullName: user.fullName, officeId: user.officeId})
        console.log('onlineUsers ' , onlineUsers)
        ioServer.emit('userConnected', onlineUsers);
    })
    
    socket.on('onUserDisonnect', (user) => {
        onlineUsers = onlineUsers.filter(u => u._id !== user._id);
        console.log('onlineUsers ' , onlineUsers)
        ioServer.emit('userDisconnected', onlineUsers);
    })
})

mongoose.connect(DBurl).then(() => {
    console.log('DB is connected')

    const server = httpServer.listen(8080, function () {
        const port = server.address().port
        console.log('server is listening on port ' + port)
    })
})
    .catch(err => console.log(err))
