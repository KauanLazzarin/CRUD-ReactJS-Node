const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const parser = require('body-parser');
const server = express();

try {
    mongoose.connect('mongodb://localhost:27017/crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log('mongodb connected successfully')
} catch (error) {
    console.log(error)
}

server.use(express.json());
server.use(parser.urlencoded({extended: true}));
server.use(routes);
server.listen(3003, console.log('servidor rodando'));