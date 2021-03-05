const express = require('express');
const router = express.Router();
const UserController = require('./database/controller/UserController.js');

router.get('/', (req, res) => res.send('hello'));
router.post('/create', UserController.createUser);

module.exports = router;