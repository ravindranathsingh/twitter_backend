import express from 'express'
import bodyParser from 'body-parser'
import { connect } from './config/database.js'
import { PORT } from './config/serverConfig.js'
import apiRoutes from './routes/index.js';

import UserRepository from './repository/user-repo.js'
import LikeService from './services/like-service.js'
import TweetRepository from './repository/tweet-repo.js';

const app = express();

const serverSetUp = () => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/api', apiRoutes)
    
    app.listen(PORT, async () => {
        console.log(`Server Started at Port ${PORT}`)
        await connect();
        console.log('MongoDB Connected')

        const userRepo = new UserRepository();
        const tweetRepo = new TweetRepository();
        const tweets = await tweetRepo.getAll(0, 10)
        const users = await userRepo.getAll()
        const likeService = new LikeService();
        await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id)
    })
}

export default serverSetUp();