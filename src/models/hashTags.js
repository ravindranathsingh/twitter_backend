import mongoose from 'mongoose'

const hashTagSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true})

const Hashtag = mongoose.model('Hashtag', hashTagSchema)
export default Hashtag;