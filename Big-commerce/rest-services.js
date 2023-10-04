const express = require("express");
const router = express.Router();

const controller = require("./controllers");

router.get("/exportCSV",controller.getExportCsvAction);


module.exports = router;