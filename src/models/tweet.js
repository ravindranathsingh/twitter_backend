const mongoose =  require('mongoose')

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    userEmail: {
        type: String
    },
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, {timestamps: true})

tweetSchema.virtual('contentWithEmail').get(function process() {
    return `${this.content} \n + Created By: ${this.userEmail}`
})

tweetSchema.pre('save', function(next) {
    console.log('Inside a hook')
    this.content = this.content + '....';
    next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;