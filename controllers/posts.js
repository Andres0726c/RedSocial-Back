const { response } = require('express');
const Usuario = require("../models/usuarios");
const Post = require("../models/post");

const getPosts = async( req, res = response ) => {
    const posts = await Post.find({}, 'title content');

    res.json({
        ok: true,
        posts
    })
}

const crearPosts = async(req, res = response) => {

    const { title, content } = req.body;

    try {
        const post = new Post( req.body );

        //Guardar post
        await post.save(title, content);

        res.json({
            ok: true,
            post
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'Error inesperado...'
        })
        
    }

}


module.exports = {
    getPosts,
    crearPosts
}