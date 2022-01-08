const mongodb = require('mongoose');

const post = mongodb.Schema({
    post_name : String,
    post_detail : mongodb.Schema.Types.Mixed,
}, { versionKey: false, timestamps: true, collection: 'Post'})

module.exports = mongodb.model('Post', post);