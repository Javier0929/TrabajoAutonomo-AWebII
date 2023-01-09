const { Router } = require('express');

const { 
    userDelete,
    userPost,
    userGet,
    userPut

} = require('../controllers/user');




const router = Router(); 


router.get('/', userGet )

router.post('/', userPost )

router.put('/:id', userPut )

router.delete('/:id', userDelete )


module.exports= router;