const { Schema, model } = require('mongoose');

const postSchema = Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: String
    },
    createdAt: {
        type: String
    },
    updateAt: {
        type: String
    },
    deletedAt: {
        type: Boolean
    },
    userId: {
        type: Boolean
    },
    
});

postSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model( 'Post', postSchema )