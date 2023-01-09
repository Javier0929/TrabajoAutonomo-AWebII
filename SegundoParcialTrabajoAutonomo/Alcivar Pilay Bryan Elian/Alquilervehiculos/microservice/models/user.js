const { Schema, model } = require("mongoose");




const UserSchema = Schema({

    Usuario: {
        type: String,
        required:[true, 'El campo usuario es obligatorio']
    },

    Contraseña: {
        type: String,
        required:[ true, 'El campo contraseña es obligatorio' ]
    }
})


module.exports= model('User', UserSchema)