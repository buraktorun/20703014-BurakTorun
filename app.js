const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const mongodb = require('mongoose');

mongodb.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}`, {
        useNewUrlParser : true,
        useUnifiedTopology : true
}, () => {
    console.log('Database Connected!')
});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('views/dist'));
app.use(express.urlencoded({ extended: true }))

const { homeRoute, postRoute } = require('./routes');

app.listen(process.env.APP_PORT, () => {
    console.log(`Sunucu aktif! http://localhost:${process.env.APP_PORT}`);

    app.use('/', homeRoute);
    app.use('/posts', postRoute);
})