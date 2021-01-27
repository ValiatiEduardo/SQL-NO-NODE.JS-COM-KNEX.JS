const { Router } = require('express')
const express = require('express')
const userControllers = require('./controllers/userControllers')
const ProjectController = require('./controllers/ProjectsController')
const router = express.Router()

router
    // Users
    .get('/users', userControllers.index)
    .post('/users', userControllers.create)
    .put('/users/:id', userControllers.create)
    .delete('/users/:id', userControllers.delete)
    // Projects
    .get('/projects', ProjectController.index)
module.exports = router