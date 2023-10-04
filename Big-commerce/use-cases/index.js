const fs = require("fs");
const { parse } = require("csv-parse");
const fetch = require('node-fetch');

const makeGetExportCsv = require("./getExportCsv");
const getExportCsv = makeGetExportCsv({fs,parse,fetch});



module.exports = {
    getExportCsv
}