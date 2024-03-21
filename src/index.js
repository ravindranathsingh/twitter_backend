const express = require('express')
const connect = require('./config/database')
const app = express();

const { PORT } = require('./config/serverConfig');

const serverSetUp = () => {
    app.listen(PORT, async () => {
        console.log(`Server Started at Port ${PORT}`)
        await connect();
        console.log('MongoDB Connected')
    })
}

serverSetUp();