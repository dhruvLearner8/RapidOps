const fs = require("fs");

const makeLogsMiddleware = require("./logs");
const logsMiddleware = makeLogsMiddleware({fs});

const makeIpAddressMiddleware = require("./ipAddress")
const ipAddressMiddleware = makeIpAddressMiddleware({fs});

const makeErrorHandlerMiddleware = require("./error");
const errorHandlerMiddleware = makeErrorHandlerMiddleware();

module.exports ={
    logsMiddleware,
    ipAddressMiddleware,
    errorHandlerMiddleware
}