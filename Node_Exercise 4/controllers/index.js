const {
    generateJWT
    } = require("../use-cases")

const makeGenerateJWTAction = require("./generateJWT");
const generateJWTAction = makeGenerateJWTAction({generateJWT});

module.exports = {
    generateJWTAction
}