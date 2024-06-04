const BaseError = require("./base.error");
const {StatusCodes}  = require('http-status-codes');

class NotImplemented extends BaseError {
    constructor( functionName) {
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, 'Something went wrong !!!', `${functionName} not implemented`, {})
    }
}

module.exports = NotImplemented;