const express = require('express');
const ApiRouter = express.Router();

const AuthRouter = require('./authRouter');

ApiRouter.use('/auth', AuthRouter);

module.exports = ApiRouter;