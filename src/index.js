import express from 'express'
import { connect } from './config/database.js'
import { PORT } from './config/serverConfig.js'
const app = express();

import service from './services/tweet-service.js'

const serverSetUp = () => {
    app.listen(PORT, async () => {
        console.log(`Server Started at Port ${PORT}`)
        await connect();
        console.log('MongoDB Connected')
        let ser = new service();
        const res = await ser.create({content: 'new Tweet by #RAVI'})
        console.log(res)
    })
}

export default serverSetUp();