const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const apiRouter = require('./routers/apiRouter');
const session = require('express-session');
const UserModel = require('./Models/userModel.js');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreply.keepwarmbaby@gmail.com',
        pass: 'dmphong123'
    }
});

var CronJob = require('cron').CronJob;
var job = new CronJob('00 00 06 * * 1-5', function () {
        /*
         * Runs every weekday (Monday through Friday)
         * at 06:00:00 AM. It does not run on Saturday
         * or Sunday.
         */
        UserModel.find({}, (err, userFound) => {
            for (let i = 0; i < userFound.receiver.length; i++) {
                var mailOptions = {
                    from: 'noreply.keepwarmbaby@gmail.com',
                    to: userFound.receiver[i].mail,
                    subject: '[NO REPLY]-KEEP WARM BABY',
                    text: userFound.receiver[i].mailContent
                };

                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) console.log(err);
                    else console.log("success");
                });
            }
        });
    },
    true, /* Start the job right now */
    'Asia/Hanoi' /* Time zone of this job. */
);

mongoose.connect('mongodb://admin:password123@ds030607.mlab.com:30607/register-people', {useNewUrlParser: true}, (err) => {
    if (err) console.log(err);
    else console.log("DB connect Success !!!");
});

let app = express();

app.use(session({
    secret: 'roseislalala',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send("Keep warm baby <3");
});

const port = process.env.PORT || 6969;
app.listen(process.env.PORT || 6969, (err) => {
    if (err) console.log(err);
    else console.log("Server is running at " + port + "");
});

