const express = require('express');

const ProblemRouter = require('./problems.routes');

const v1Router = express.Router();

v1Router.use('/problems', ProblemRouter); //If any request comes and route continue with the /problems we map it to the problemRouter

module.exports = v1Router;