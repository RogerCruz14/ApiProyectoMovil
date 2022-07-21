const { Schema, model } = require('mongoose')
const schemaNota = new Schema(
    {
        titulo : {
            type : String
        },
        descripcion : {
            type : String
        },
        fecha : {

        },
        status : {
            type: Boolean,
            default: false
        }
    }
)
module.exports = model('nota', schemaNota)
