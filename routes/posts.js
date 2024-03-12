/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campo');
const { getPosts, crearPosts } = require('../controllers/posts');


const router = Router();

router.get( '/', getPosts);

router.post( '/', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('content', 'El contenido es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearPosts);

module.exports = router;