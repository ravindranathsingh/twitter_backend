const express = require('express')

const app = express();

const { PORT } = require('./config/serverConfig')
const connect = require('./config/database')
const TweetRepository = require('./repository/tweet-repo')
const Comment = require('./models/comment')

const serverSetUp = () => {
    app.listen(PORT, async () => {
        console.log(`Server Started at Port ${PORT}`)
        await connect();
        console.log('MongoDB Connected')
        const tweetRepo = new TweetRepository();
        const tweet = await tweetRepo.getWithComments('65faf31a47bc7f5e48680d0e')
        console.log(tweet)
    })
}

serverSetUp();