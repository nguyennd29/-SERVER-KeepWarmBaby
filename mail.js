var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'duynguyen29898@gmail.com',
        pass: 'lmqhskvccnsleggp'

    }
});

var mailOptions = {
    from: 'duynguyen29898-nonreply@gmail.com',
    to: 'duynguyen29898@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'hello phong :v'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});