const express = require('express');
const FlirtRouter = express.Router();
// const bcrypt = require('bcrypt-nodejs');

const FlirtModel = require('../Models/userModel.js');
//CRUD
//C
FlirtRouter.post('/:id', (req, res) => {
    const {mail, mailContent, receiverLocation, timeReceive} = req.body;
    FlirtModel.findOne({_id: req.params.id}, (err, flirtUserFound) => {
        if (err) res.status(500).json({success: 0, error: err})
        else {
            res.status(200).json({success: 1, user: userFound})
            FlirtModel.create({mail, mailContent, receiverLocation, timeReceive}, (err, flirtCreated) => {
                if (err) res.status(500).json({success: 0, error: err});
                else {
                    flirtUserFound.receiver.push(flirtCreated);
                    res.status(201).json({success: 1, flirt: flirtCreated});
                }
            });
        }
    );
}
});

//R
FlirtRouter.get('/', (req, res) => {
    FlirtModel.find({}, (err, flirts) => {
        if (err) res.status(500).json({success: 0, error: err});
        else res.json({success: 1, flirt: flirts});
    });
});

FlirtRouter.get('/:id', (req, res) => {
    FlirtModel.findOne({_id: req.params.id}, (err, flirtFound) => {
        if (err) res.status(500).json({success: 0, error: err})
        else res.status(200).json({success: 1, flirt: flirtFound})
    });
});

//U
FlirtRouter.put('/:id', (req, res) => {
    const {mail, mailContent, receiverLocation, timeReceive} = req.body || {};
    const userId = req.params.id;
    FlirtModel.findById(
        userId,
        (err, flirtFound) => {
            if (err) res.status(500).json({success: 0, error: err});
            else if (!flirtFound) res.status(404).json({success: 0, error: "No such email"});
            else {
                const flirtChange = {mailContent, mail,};
                for (key in userChange) {
                    if (userChange[key] !== null && userChange[key] !== undefined)
                        userFound[key] = userChange[key];
                }
                userFound.save((err, userUpdated) => {
                    if (err) res.status(500).json({success: 0, error: err});
                    else res.send({success: 1, user: userUpdated});
                });
            }
        });
});


module.exports = FlirtRouter;