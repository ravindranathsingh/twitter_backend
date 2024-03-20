const mongooes = require('mongoose')

const hashTagSchema = new mongooes.Schema({
    title: {
        type: String,
        require: true
    },
    tweets: [
        {
            type: mongooes.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true})

const Hashtag = mongooes.model('Hashtag', hashTagSchema)
module.exports = Hashtag;