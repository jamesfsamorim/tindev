const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const server = require('http').Server(app)
const io = require("socket.io")(server)

const connectedUsers = {}
io.on('connection', socket => {
    const { user } = socket.handshake.query
    console.log("user: ", user)

    connectedUsers[user] = socket.id
})

mongoose.connect("mongodb+srv://omni:omniadmin@tindevcluster-mt9dj.mongodb.net/tindev_db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    next()
})
app.use(cors())
app.use(express.json())
app.use(routes)

server.listen('3333')
