var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreply.keepwarmbaby@gmail.com',
        pass: 'dmphong123'
    }
});

var mailOptions = {
    from: 'noreply.keepwarmbaby@gmail.com',
    to: 'duynguyen29898@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// module.exports.transporter = transporter;