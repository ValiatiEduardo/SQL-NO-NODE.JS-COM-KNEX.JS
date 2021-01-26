const { Router } = require('express')
const express = require('express')
const userControllers = require('./controllers/userControllers')
const router = express.Router()

router.get('/users', userControllers.index)
router.post('/users', userControllers.create)
router.put('/users/:id', userControllers.create)
router.delete('/users/:id', userControllers.delete)
module.exports = router