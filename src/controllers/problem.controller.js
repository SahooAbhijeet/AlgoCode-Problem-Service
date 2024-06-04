const { StatusCodes } = require('http-status-codes');

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        message: 'Ping Controller is UP'
    })
}

function addProblem(req,res) {
    
}

function getProblem(req,res) {
    
}

function getProblems(req,res) {
    
}

function deleteProblem(req,res) {
    
}

function updateProblem(req,res) {
    
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}

/*
* res.status --> returns the same response object with status property set.
* .json --> return the same response object which has status set but this json to be returned is also set
*/