const fs = require("fs");
const { parse } = require("csv-parse");
const keys = require("../config/keys.js")
const bigCommerceKey = keys.bigCommerce.access_token;
const fetch = require('node-fetch');

const {
    getExportCsv
} = require("../use-cases");

const makeGetExportCsvAction = require("./getExportCsv");
const getExportCsvAction = makeGetExportCsvAction({getExportCsv,bigCommerceKey,fetch})

module.exports = {
    getExportCsvAction
}

