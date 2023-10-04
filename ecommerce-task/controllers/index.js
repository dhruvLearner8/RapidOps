const {
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
                } = require("../use-cases")

const makeGenerateJWTAction = require("./generateJWT");
const generateJWTAction = makeGenerateJWTAction({generateJWT});

const makeLogoutAction = require("./logout");
const logoutAction = makeLogoutAction();

const makeProfileAction = require("./profile");
const profileAction = makeProfileAction();

const makeHomeAction = require("./home");
const homeAction = makeHomeAction();

const makeGetRegisterAction = require("./getRegister");
const getRegisterAction = makeGetRegisterAction();

const makePostRegisterAction = require("./postRegister");
const postRegisterAction = makePostRegisterAction({postRegister})

const makePostLoginAction = require("./postLogin");
const postLoginAction = makePostLoginAction({postLogin,generateJWT});

const makeGetAllUsersAction = require("./getAllUsers");
const getAllUserAction = makeGetAllUsersAction({getAllUsers});

const makeDeleteUserAction = require("./deleteUser");
const deleteUserAction = makeDeleteUserAction({deleteUser});

const makeGetEditUserAction = require("./getEditUser");
const getEditUserAction = makeGetEditUserAction({getEditUser});

const makePostEditUserAction = require("./postEditUser");
const postEditUserAction = makePostEditUserAction({postEditUser});

const makeGetAllProductsAction = require("./getAllProducts");
const getAllProductsAction = makeGetAllProductsAction({getAllProducts})

const makeAddProductAction = require("./getAddProduct");
const addProductAction = makeAddProductAction();

const makePostAddProductAction = require("./postAddProduct");
const postAddProductAction = makePostAddProductAction({postAddProduct})

const makeDeleteProductAction = require("./deleteProduct");
const deleteProductAction = makeDeleteProductAction({deleteProduct})

const makeGetEditProductAction = require("./getEditProduct");
const getEditProductAction = makeGetEditProductAction({getEditProduct})

const makePostEditProductAction = require("./postEditProduct");
const postEditProductAction = makePostEditProductAction({postEditProduct});

const makeAddToCartAction = require("./addToCart");
const addToCartAction = makeAddToCartAction({addToCart});

const makeGetCartAction = require("./getCart");
const getCartAction = makeGetCartAction({getCart});

module.exports = {
    generateJWTAction,
    logoutAction,
    profileAction,
    homeAction,
    getRegisterAction,
    postRegisterAction,
    postLoginAction,
    getAllUserAction,
    deleteUserAction,
    getEditUserAction,
    postEditUserAction,
    getAllProductsAction,
    addProductAction,
    postAddProductAction,
    deleteProductAction,
    getEditProductAction,
    postEditProductAction,
    addToCartAction,
    getCartAction
}