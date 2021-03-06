const UserModel = require('./../model/user.js');
const mongoose = require('mongoose');

const UserDB = mongoose.model('User');

module.exports = {
    async createUser (req, res) {
        try {
            await UserDB.create(req.body);
            console.log(`User created with sucssess`);
            
            return res.json(req.body);
        } catch (error) {
            console.log(error);
            return;
        };
    },

    async getUsers (req, res) {
        try {
            const usersData = await UserDB.find();
            console.log(`All users data find: ${usersData}`);

            return res.json(usersData);
        } catch (error) {
            console.log(error);
            return;
        }
    },

    async getUserById (req, res) {
        try {
            const {id} = req.body;
            const User = await UserDB.findById(id);    
            
            res.json(User)
        } catch (error) {
            console.log(error);
            return;
        };
    },

    async updateUser (req, res) {
        try {
            const {id} = req.params;
            const CurrentUserData = await UserDB.findById(id);

            const data = {
                name: req.body.name || CurrentUserData.name,
                email: req.body.email || CurrentUserData.email,
                phoneNumber: req.body.phoneNumber || CurrentUserData.phoneNumber,
                cpf: req.body.cpf || CurrentUserData.cpf,
            }

            await UserDB.findByIdAndUpdate(id, data);  

            return res.send('User update done');
        } catch (error) {
            console.log(error);
            return;
        };
    }
};