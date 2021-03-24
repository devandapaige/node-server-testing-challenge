const express = require("express");
//const session = require('express-session')
const router = require("./routers/router");
const archerRouter = require("./routers/archer-router")
const server = express();

server.use(express.json());
server.use(router);
server.use(archerRouter);

module.exports = server;
