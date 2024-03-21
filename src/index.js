import express from 'express'
import { connect } from './config/database.js'
import { PORT } from './config/serverConfig.js'
const app = express();

const serverSetUp = () => {
    app.listen(PORT, async () => {
        console.log(`Server Started at Port ${PORT}`)
        await connect();
        console.log('MongoDB Connected')
    })
}

export default serverSetUp();