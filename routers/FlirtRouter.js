const express = require('express');
const FlirtRouter = express.Router();
// const bcrypt = require('bcrypt-nodejs');

const FlirtModel = require('../Models/userModel.js');
//CRUD
//C
FlirtRouter.post('/:id', (req,res) => {
    const {mail,mailContent,receiverLocation,timeReceive} = req.body;
    FlirtModel.create({mail,mailContent,receiverLocation,timeReceive}, (err,flirtCreated) => {
        if(err) res.status(500).json({ success: 0, error: err });
        else res.status(201).json({ success: 1, flirt: flirtCreated});
    });
});

//R
FlirtRouter.get('/', (req,res) => {
    FlirtModel.find({}, (err, flirts) => {
        if(err) res.status(500).json({ success: 0, error: err });
        else res.json({ success: 1, flirt: flirts });
    });
});

FlirtRouter.get('/:id', (req,res) => {
    FlirtModel.findOne({ _id: req.params.id }, (err, flirtFound) => {
        if(err) res.status(500).json({ success: 0, error: err })
        else res.status(200).json({ success: 1, flirt: flirtFound })
    });
});

//U
FlirtRouter.put('/:id', (req,res) => {

});



module.exports = FlirtRouter;