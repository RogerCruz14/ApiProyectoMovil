const ModelUser = require('../models/user.models')
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    const { username, password, email, telefono } = req.body
    const existe = await ModelUser.findOne({
        username: username
    })
    if(existe){
        return res.json({msg: `El usuario: ${username} ya se encuentra registrado`})
    }
    const user = new ModelUser({username, password, telefono});
    user.password = await user.encryptPassword(password)
    const userCreate = await user.save();

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: 606024
    })
    res.status(200).json({msg:` El usuario fue creado satisfactoriamente, auth: true, token`})
}

const login = async (req, res) => {
    const { username, password } = req.body
    const existe = await ModelUser.findOne({
        username : username
    })
    if(!existe){
        return res.json({msg: 'Usuario no encontrado'})
    }else{
        const comparacion = await existe.comparePassword(password)
        if(!comparacion){
            return res.json({msg: 'Contraseña incorrecta'})
        }else{
            const token = jwt.sign({id: existe._id}, process.env.JWT_SECRET, { expiresIn: 86400 })
            return res.json({msg: 'Bienvenid@', auth: true, accessToken : token, username: username, _id : existe._id, telefono: existe.telefono, email: existe.email})
        }
    }
}

module.exports = {
    register, login
}