const { Schema, model} = require('mongoose')

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    likes: [{
        type: Schema.Types.ObjectID,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectID,
        ref: 'Dev'
    }],
    avatar: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Dev', DevSchema)