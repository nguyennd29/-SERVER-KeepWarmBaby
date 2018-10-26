const express = require('express');
const ApiRouter = express.Router();
const UserRouter = require('./UserRouter');
const AuthRouter = require('./AuthRouter');
const FlirtRouter = require('./FlirtRouter');
const SendingRouter = require('./sending.js');

ApiRouter.use('/auth', AuthRouter);
ApiRouter.use('/user', UserRouter);
ApiRouter.use('/flirt', FlirtRouter);
ApiRouter.use('/sending', SendingRouter);

module.exports = ApiRouter;