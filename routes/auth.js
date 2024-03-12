/*
    Path: 'api/login'
*/
const { Router } = require('express');
const { login } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campo');

const router = Router();

router.post( '/',
    [
        check('email', 'El usuario es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],
    login
    )


module.exports = router;