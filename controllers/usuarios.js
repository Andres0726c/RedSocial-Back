const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require("../models/usuarios");
const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async(req, res = response) => {

    const usuarios = await Usuario.find({}, 'nombre email role google');

    res.json({
        ok: true,
        usuarios
    });

}

const crearUsuarios = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const existeEmail = await Usuario.findOne({ email });

        if( existeEmail ){
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            })
        }

        const usuario = new Usuario( req.body );

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync ( password, salt );
    
        //Guardar usuario
        await usuario.save();

        //Generar JWT
        const token = await generarJWT( usuario.id );
    
        res.json({
            ok: true,
            usuario: usuario,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'Error inesperado...'
        })
        
    }

}


module.exports = {
    getUsuarios,
    crearUsuarios
}