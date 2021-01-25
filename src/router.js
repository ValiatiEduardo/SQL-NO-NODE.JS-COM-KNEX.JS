const { Router } = require('express')
const express = require('express')
const userControllers = require('./controllers/userControllers')
const router = express.Router()

router.get('/users', userControllers.index)


module.exports = router