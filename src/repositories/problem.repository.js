const { Problem } = require("../models");

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases)? problemData.testCases : [],
            });
            return problem;
        } catch (error) {
          console.log(error);
          throw error;  
        }
    }

    async getProblems() {
        try {
            const response = await Problem.find({});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;