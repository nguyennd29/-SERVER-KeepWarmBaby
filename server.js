const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const apiRouter = require('./routers/apiRouter');
const session = require('express-session');
var CronJob = require('cron').CronJob;

mongoose.connect('mongodb://admin:password123@ds030607.mlab.com:30607/register-people', { useNewUrlParser: true }, (err) => {
	if(err) console.log(err);
	else console.log("DB connect Success !!!");
});

let app = express();

app.use(session({
	secret: 'roseislalala',
	resave: false,
	saveUninitialized: true,
	cookie: { 
		httpOnly: false,
		maxAge: 7*24*60*60*1000
	}
}));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.get('/', (req,res) => {
	res.send("Keep warm baby <3");
});

const port = process.env.PORT || 6969;
app.listen(process.env.PORT || 6969, (err) => {
	if(err) console.log(err);
	else console.log("Server is running at "+port+"");
});

