const express = require('express');
const ApiRouter = express.Router();
const UserRouter = require('./UserRouter');
const AuthRouter = require('./AuthRouter');

ApiRouter.use('/auth', AuthRouter);
ApiRouter.use('/user', UserRouter);

module.exports = ApiRouter;