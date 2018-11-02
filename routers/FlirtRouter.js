const express = require('express');
const FlirtRouter = express.Router();
// const bcrypt = require('bcrypt-nodejs');

const FlirtModel = require('../Models/userModel.js');
//CRUD
//C
FlirtRouter.post('/:id', (req, res) => {
    const mail = req.body.mail,
        mailContent = req.body.mailContent,
        receiverLocation = req.body.receiverLocation,
        timeReceive = req.body.timeReceive;
    FlirtModel.findOne({_id: req.params.id}, (err, flirtUserFound) => {
        if (err) res.status(500).json({success: 0, error: err});
        else {
            flirtUserFound.receiver.push({mail, mailContent});
            // res.status(200).json({success: 1, user: flirtUserFound});
            flirtUserFound.save((err, callback) => {
                if (err) res.status(500).json({success: 0, error: err});
                else res.send({success: 1, user: callback});
            });
        }
    });
});

//R
FlirtRouter.get('/:id', (req, res) => {
    FlirtModel.findOne({_id: req.params.id}, (err, flirtUserFound) => {
        if (err) res.status(500).json({success: 0, error: err});
        else {
            res.status(200).json({success: 1, flirt: flirtUserFound});
        }
    });
});

FlirtRouter.get('/:id/:num', (req, res) => {
    uid = req.params.id;
    fid = req.params.num;
    FlirtModel.findOne({_id: uid}, (err, flirtUserFound) => {
        if (err) res.status(500).json({success: 0, error: err});
        res.status(200).json({success: 1, flirt: flirtUserFound.receiver[fid]});
    });
});

//U
// FlirtRouter.put('/:id', (req, res) => {
//     const {mail, mailContent, receiverLocation, timeReceive} = req.body || {};
//     const userId = req.params.id;
//     FlirtModel.findById(
//         userId,
//         (err, flirtUserFound) => {
//             if (err) res.status(500).json({success: 0, error: err});
//             else if (!flirtUserFound) res.status(404).json({success: 0, error: "No such user"});
//             else {
//                 const flirtChange = {mailContent, mail, receiverLocation, timeReceive};
//                 for (key in flirtChange) {
//                     if (flirtChange[key] !== null && flirtChange[key] !== undefined)
//                         flirtUserFound.receiver[key] = flirtChange[key];
//                 }
//                 flirtUserFound.save((err, flirtUserUpdated) => {
//                     if (err) res.status(500).json({success: 0, error: err});
//                     else res.send({success: 1, user: flirtUserUpdated});
//                 });
//             }
//         });
// });

//D
FlirtRouter.delete('/:id/:num', (req, res) => {
    uid = req.params.id;
    fid = req.params.num;
    FlirtModel.findOne({_id: uid}, (err, flirtUserDeleted) => {
        if (err) res.status(500).json({success: 0, error: err});
        else {
            // res.status(200).json({success: 1, user: userFound});
            flirtUserDeleted.receiver = flirtUserDeleted.receiver.filter(item => item !== flirtUserDeleted.receiver[fid]);
            // [1,2,3].filter(item => item != 2);
            flirtUserDeleted.save((err, callback) => {
                if (err) res.status(500).json({success: 0, error: err});
                else res.send({success: 1, user: callback});
            });
        }
    });
});

module.exports = FlirtRouter;