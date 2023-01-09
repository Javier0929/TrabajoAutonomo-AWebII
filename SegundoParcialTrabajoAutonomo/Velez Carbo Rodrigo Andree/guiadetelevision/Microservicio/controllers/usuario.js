const { response, request } = require('express');
const Usuario = require('../models/usuario');




const userGet = async (req, res=response) =>{ 
    const usuario = await Usuario.find();
    res.status(200).json(usuario)
}
const userPost = async (req, res=response) =>{ 
    const { email, password } = req.body; 
    const usuario = new Usuario({ email, password })

    await usuario.save();
    res.status(200).json(usuario)
}
const userPut = async (req, res=response) =>{ 
    const {id}= req.params;
    const { ...data } = req.body; 
    const usuario = await Usuario.findByIdAndUpdate(id,data, {new: true})
    res.status(200).json(usuario)
}



const userDelete = async (req= request, res=response) =>{
    const {id}= req.params;

    const usuario = await Usuario.deleteOne()

    res.status(200).json()
}

module.exports={
userDelete,
userGet,
userPost,
userPut
}