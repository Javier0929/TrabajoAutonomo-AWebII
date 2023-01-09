const { Schema, model } = require("mongoose");




const UsuarioSchema = Schema({

    email: {
        type: String,
        required:[true, 'El campo email es obligatorio']
    },

    password: {
        type: String,
        required:[ true, 'El campo password es obligatorio' ]
    }
})


module.exports= model('Usuario', UsuarioSchema)