const {
    generateJWT
    } = require("../use-cases")

const makeGenerateJWTAction = require("./generateJWT");
const generateJWTAction = makeGenerateJWTAction({generateJWT});

const makeLoginAction = require("./login");
const loginAction = makeLoginAction();

const makeLogoutAction = require("./logout");
const logoutAction = makeLogoutAction();

const makeProfileAction = require("./profile");
const profileAction = makeProfileAction();

const makeHomeAction = require("./home");
const homeAction = makeHomeAction();

module.exports = {
    generateJWTAction,
    loginAction,
    logoutAction,
    profileAction,
    homeAction
}