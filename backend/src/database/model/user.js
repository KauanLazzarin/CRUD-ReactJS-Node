const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    },

    cpf: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

mongoose.model('User', UserModel);