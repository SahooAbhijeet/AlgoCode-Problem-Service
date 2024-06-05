const sanitizeMarkeddownContent = require("../utils/markeddownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository; //we have here use constructor because now the repository data is stored in mongodb if later some other database it is stored then it can also interact with that db also using the service layer
    }

    async createProblem(problemData) {

        // 1. Sanitize the markdown for description
        problemData.description = sanitizeMarkeddownContent(problemData.description);

        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async deleteProblem(problemId) {
        const deletedProblem  = await this.problemRepository.deleteProblem(problemId);
        return deletedProblem;
    }
}

module.exports = ProblemService;