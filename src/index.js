import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'

import { connect } from './config/database.js'
import { PORT } from './config/serverConfig.js'
import { passportAuth } from './config/jwt-middleware.js'
import apiRoutes from './routes/index.js';

const app = express();

const serverSetUp = () => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use(passport.initialize())
    passportAuth(passport)

    app.use('/api', apiRoutes)
    
    app.listen(PORT, async () => {
        console.log(`Server Started at Port ${PORT}`)
        await connect();
        console.log('MongoDB Connected')
    })
}

export default serverSetUp();