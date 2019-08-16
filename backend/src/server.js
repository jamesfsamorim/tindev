const express = require('express')
const server = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb+srv://omni:omniadmin@tindevcluster-mt9dj.mongodb.net/tindev_db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)
server.listen('3333')
