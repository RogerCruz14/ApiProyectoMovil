const note = require('express').Router()

notas.get('/', (req, res) => {
    res.send('nota')
})


module.exports = note