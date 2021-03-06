const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const parser = require('body-parser');
const server = express();

// try connects to server
try {
    mongoose.connect('mongodb://localhost:27017/crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log('Connection with MongoDB done');
} catch (error) {
    console.log('Connection with MongoDB Server failed, error:');
    console.log(error);
};

// some server settings;
server.use(express.json());
server.use(parser.urlencoded({extended: true}));
server.use(routes);
server.listen(3003, console.log('servidor rodando'));