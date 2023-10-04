const express = require('express');
const router = express.Router();
const { handleGetAllDatabases, 
        handleCreateDatabase } = require('../controllers/database.js');

router.get('/',handleGetAllDatabases);
router.post('/',handleCreateDatabase);
router.get('/useDatabase',handleUseDatabase);

module.exports = router;