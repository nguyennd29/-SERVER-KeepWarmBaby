const express = require('express');
const FlirtRouter = express.Router();
const bcrypt = require('bcrypt-nodejs');

const UserModel = require('../Models/userModel.js');
//CRUD
//C
FlirtRouter.post('/:id', (req,res) => {
    const receiver = req.body;

});



module.exports = FlirtRouter;