const express = require('express');
const ApiRouter = express.Router();
const UserRouter = require('./UserRouter');
const AuthRouter = require('./AuthRouter');
const FlirtRouter = require('./FlirtRouter');

ApiRouter.use('/auth', AuthRouter);
ApiRouter.use('/user', UserRouter);
ApiRouter.use('/flirt', FlirtRouter);
module.exports = ApiRouter;