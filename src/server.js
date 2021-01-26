const express = require('express')
const knexfile = require('../knexfile')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(router)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.messge})
})



app.listen(3333, () => console.log('Server is running'))