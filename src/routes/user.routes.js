const notas = require('express').Router()

const userController = require('../controllers/user.controllers')

notas.post('/register', userController.register)
notas.post('/login', userController.login)

module.exports = notas