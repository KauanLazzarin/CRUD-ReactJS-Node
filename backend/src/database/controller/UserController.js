const UserModel = require('./../model/user.js');
const mongoose = require('mongoose');

const UserDB = mongoose.model('User');

module.exports = {
    async createUser (req, res) {
        try {
            await UserDB.create(req.body);
        } catch (error) {
            console.log(error);
        };

        console.log(`User created sucssessfuly, user name: ${req.body.name} user email: ${req.body.email}`);

        res.json(req.body);
    }
};