const express = require('express');
const router = express.Router();
const UserController = require('./database/controller/UserController.js');

// home route
router.get('/', (req, res) => res.send('Hello, try another route'));

// get users route
router.get('/users', UserController.getUsers);

// get user by id
router.get('/users/getuser', UserController.getUserById);

// create user
router.post('/create', UserController.createUser);

// delete user
router.delete('/delete/:id', UserController.deleteUser);

//update user
router.put('/users/update/:id', UserController.updateUser);

module.exports = router;