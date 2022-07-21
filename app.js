if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')

const app = express()
const port = 3001 || process.env.PORT

main = async () => {
    await require('./src/config/conexion').dbc()

    //MIDDLEWARES
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    //ROUTES
    app.use('/api/v1/user', require('./src/routes/user.routes'))
    app.use('/api/v1/nota', require('./src/routes/user.routes'))
}

main()

app.listen(port, () => {
    console.log(`Servidor a su servicio en el pueto ${port}`)
})