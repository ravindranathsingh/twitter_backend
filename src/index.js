const express = require('express')

const app = express();

const { PORT } = require('./config/serverConfig')
const connect = require('./config/database')
const TweetRepository = require('./repository/tweet-repo')

const serverSetUp = () => {
    app.listen(PORT, async () => {
        console.log(`Server Started at Port ${PORT}`)
        await connect();
        console.log('MongoDB Connected')
        const tweetRepo = new TweetRepository();
        const tweet = await tweetRepo.getAll(0, 4);
        console.log(tweet[0].contentWithEmail)
    })
}

serverSetUp();