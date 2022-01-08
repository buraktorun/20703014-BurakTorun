const express = require('express');
const posts = require('../models/post');
const home = express.Router();

home.get('/', (req, res) => {
    posts.find({}).then((yazi) => {
        res.status(200).render('anasayfa.ejs', { title : 'Anasayfa', yazilar : yazi });
    })
});

home.get('/ekle', (req, res) => {
    res.status(200).render('postekle.ejs', { title: 'Post Ekle' });
});

home.post('/ekle', (req, res) => {
    const yazi = new posts(req.body);
    yazi.save();
    res.redirect('/')
});

home.get('/sil/:id', (req, res) => {
    posts.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/')
        })
})

module.exports = home;