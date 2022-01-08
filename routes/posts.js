const express = require('express');

const post = express.Router();

const posts = require('../models/post');

post.get('/:id', (req, res) => {
    posts.findById(req.params.id).then((yazi) => {
        res.status(200).render('post.ejs', { title: yazi.post_name, yazi : yazi })
    })
});

module.exports = post;