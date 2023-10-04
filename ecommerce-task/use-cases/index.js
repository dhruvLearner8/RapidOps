const jwt = require('jsonwebtoken');
const keys = require("../config/keys");
const JWT_SECRET_KEY = keys.JWT.JWT_SECRET_KEY;
const { MySqlquery,mongoDBquery,productQuery,cartQuery}= require("../data-access");

const { v4: uuidv4 } = require('uuid');

const makeGenerateJWT = require("./generateJWT");
const generateJWT = makeGenerateJWT({jwt,JWT_SECRET_KEY});

const makePostRegister = require("./postRegister");
const postRegister = makePostRegister({uuidv4,MySqlquery,mongoDBquery});

const makePostLogin = require("./postLogin");
const postLogin = makePostLogin({MySqlquery,mongoDBquery});

const makeGetAllUsers = require("./getAllUsers");
const getAllUsers = makeGetAllUsers({mongoDBquery})

const makeDeleteUser = require("./deleteUser");
const deleteUser = makeDeleteUser({mongoDBquery});

const makeGetEditUser = require("./getEditUser");
const getEditUser = makeGetEditUser({mongoDBquery});

const makePostEditUser = require("./postEditUser");
const postEditUser = makePostEditUser({mongoDBquery});

const makeGetAllProducts = require("./getAllProducts");
const getAllProducts = makeGetAllProducts({productQuery});

const makePostAddProduct = require("./postAddProduct");
const postAddProduct = makePostAddProduct({productQuery});

const makeDeleteProduct = require("./deleteProduct");
const deleteProduct = makeDeleteProduct({productQuery,cartQuery})

const makeGetEditProduct = require("./getEditProduct");
const getEditProduct = makeGetEditProduct({productQuery})

const makePostEditProduct = require("./postEditProduct");
const postEditProduct = makePostEditProduct({productQuery});

const makeAddToCart = require("./addToCart");
const addToCart = makeAddToCart({cartQuery})

const makeGetCart = require("./getCart");
const getCart = makeGetCart({cartQuery})

module.exports = {
    generateJWT,
    postRegister,
    postLogin,
    getAllUsers,
    deleteUser,
    getEditUser,
    postEditUser,
    getAllProducts,
    postAddProduct,
    deleteProduct,
    getEditProduct,
    postEditProduct,
    addToCart,
    getCart
}