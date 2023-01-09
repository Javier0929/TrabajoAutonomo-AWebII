const { Router } = require('express');

const { 
userDelete,
userGet,
userPost,
userPut

} = require('../controllers/usuario');




const router = Router(); 


router.get('/', userGet )

router.post('/', userPost )

router.put('/:id', userPut )

router.delete('/:id', userDelete )


module.exports= router;