const express = require('express');
const SendingRouter = express.Router();
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreply.keepwarmbaby@gmail.com',
        pass: 'dmphong123'
    }
});

SendingRouter.post('/', (req,res) => {
    const mail = req.body.mail,
        mailContent = req.body.mailContent,
        receiverLocation = req.body.receiverLocation,
        timeReceive = req.body.timeReceive;

    var mailOptions = {
        from: 'noreply.keepwarmbaby@gmail.com',
        to: mail,
        subject: '[NO REPLY]-KEEP WARM BABY',
        text: mailContent
    };

    transporter.sendMail(mailOptions, function(err, info){
        if (err) res.status(500).json({success: 0, error: err});
        else res.send({success: 1, message: info});
    });
});

module.exports = SendingRouter;