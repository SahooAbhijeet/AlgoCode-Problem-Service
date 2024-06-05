const BaseError = require('./base.error');
const {StatusCodes}  = require('http-status-codes');

class InternalServerError extends BaseError {
    constructor( details) {
        super('InternalServerError', StatusCodes.INTERNAL_SERVER_ERROR, 'Something went wrong at the server', details)
    }
}

module.exports = InternalServerError;