const { Schema, model } = require('mongoose')
const bcryptjs = require('bcryptjs')

const schemaUser = new Schema(
    {
        username : {
            type : String
        },
        password : {
            type : String
        },
        email : {
            type : String
        },
        telefono : {
            type : String
        },
    }
)

schemaUser.methods.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    const hash = bcryptjs.hash(password, salt)
    return hash
}

schemaUser.methods.comparePassword = async function (password) {
    return await bcryptjs.compare(password, this.password)
}

module.exports = model('user', schemaUser)