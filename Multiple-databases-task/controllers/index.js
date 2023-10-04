const {
    generateJWT,
    postRegister,
    postLogin
                } = require("../use-cases")

const makeGenerateJWTAction = require("./generateJWT");
const generateJWTAction = makeGenerateJWTAction({generateJWT});



const makeLogoutAction = require("./logout");
const logoutAction = makeLogoutAction();

const makeProfileAction = require("./profile");
const profileAction = makeProfileAction();

const makeHomeAction = require("./home");
const homeAction = makeHomeAction();

const makeGetChooseDatabaseAction = require("./getChooseDatabase");
const getChooseDatabaseAction = makeGetChooseDatabaseAction();

const makePostChooseDatabaseAction = require("./postChooseDatabase");
const postChooseDatabaseAction = makePostChooseDatabaseAction();

const makeGetRegisterAction = require("./getRegister");
const getRegisterAction = makeGetRegisterAction();

const makePostRegisterAction = require("./postRegister");
const postRegisterAction = makePostRegisterAction({postRegister})

const makePostLoginAction = require("./postLogin");
const postLoginAction = makePostLoginAction({postLogin,generateJWT});

module.exports = {
    generateJWTAction,
  
    logoutAction,
    profileAction,
    homeAction,
    getChooseDatabaseAction,
    postChooseDatabaseAction,
    getRegisterAction,
    postRegisterAction,
    postLoginAction
}