const express = require('express');

const router = express.Router();

const {
    getLoginPage,
    postLoginPage
    } = require('../controllers/login')

// const { checkAuthUser } = require('../middlewares/auth-middleware');

router.get('/',getLoginPage);
router.post('/', postLoginPage);

// router.use('/changePass',checkAuthUser);

module.exports = router;