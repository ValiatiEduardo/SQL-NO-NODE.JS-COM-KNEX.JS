const express = require('express')
const knexfile = require('../knexfile')
const router = require('./router')

const app = express()

app.use(router)

const knex = require('./database')



app.listen(3333, () => console.log('Server is running'))