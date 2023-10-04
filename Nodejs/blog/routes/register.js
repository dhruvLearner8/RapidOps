const express = require('express');

const router = express.Router();

const {
    getRegisterPage,
    postRegisterPage
                    } = require('../controllers/register')


router.get('/',getRegisterPage)
router.post('/',postRegisterPage);
// router.post('/login',handleLogin);


module.exports = router;