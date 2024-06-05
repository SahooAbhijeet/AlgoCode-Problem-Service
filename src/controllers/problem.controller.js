const { StatusCodes } = require('http-status-codes');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');


const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        message: 'Ping Controller is UP'
    })
}

async function addProblem(req,res,next) {
    console.log("incoming request", req.body);
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message:'Successfully created the new problem',
            data: newProblem,
            error: {}
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req,res,next) {
    try {
        const response = await problemService.getProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully get all the problems',
            data: response,
            error: {}
        })
    } catch (error) {
        next(error);
    }
}

function getProblem(req,res) {
    
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