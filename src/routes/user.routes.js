const notas = require('express').Router()

notas.get('/', (req, res) => {
    res.send('ok:ok')
})

module.exports = notas