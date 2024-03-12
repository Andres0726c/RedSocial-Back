const { Schema, model } = require('mongoose');

const usuariosSchema = Schema({

    fullName: {
        type: String,
    },
    age: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: String,
    },
    createdAt: {
        type: Boolean
    },
    updatedAt: {
        type: Boolean
    },
    deletedAt: {
        type: Boolean
    },
    
});

usuariosSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'Usuario', usuariosSchema )