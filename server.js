const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const apiRouter = require('./routers/apiRouter');

mongoose.connect('mongodb://admin:password123@ds030607.mlab.com:30607/register-people', { useNewUrlParser: true }, (err) => {
	if(err) console.log(err);
	else console.log("DB connect Success !!!");
});

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.send("Techkids app!");
});

// app.use('/api', apiRouter);

const port = process.env.PORT || 6969;
app.listen(process.env.PORT || 6969, (err) => {
	if(err) console.log(err);
	else console.log("Server is running at "+port+"");
});