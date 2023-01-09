const { response, request } = require('express');
const User = require('../models/user');




const userGet = async (req, res=response) =>{ 
    const user = await User.find();
    res.status(200).json(user)
}
const userPost = async (req, res=response) =>{ 
    const { Usuario, Contraseña } = req.body; 
    const user = new User({ Usuario, Contraseña })

    await user.save();
    res.status(200).json(user)
}
const userPut = async (req, res=response) =>{ 
    const {id}= req.params;
    const { ...data } = req.body; 
    const user = await User.findByIdAndUpdate(id,data, {new: true})
    res.status(200).json(user)
}




const userDelete = async (req= request, res=response) =>{
    const {id}= req.params;

    const user = await User.deleteOne()

    res.status(200).json(user)
}

module.exports={
    userDelete,
    userPost,  
    userGet,
    userPut
}