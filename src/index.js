const express = require('express')

const app = express();

const { PORT } = require('./config/serverConfig')

const serverSetUp = () => {
    app.listen(PORT, () => {
        console.log(`Server Started at Port ${PORT}`)
    })
}

serverSetUp();