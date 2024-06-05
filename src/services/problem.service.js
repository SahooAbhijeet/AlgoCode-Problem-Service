const sanitizeMarkeddownContent = require("../utils/markeddownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository; //we have here use constructor because now the repository data is stored in mongodb if later some other database it is stored then it can also interact with that db also using the service layer
    }

    async createProblem(problemData) {
        try {
            // 1. Sanitize the markdown for description
            problemData.description = sanitizeMarkeddownContent(problemData.description);
            console.log("ProblemData", problemData);

            const problem = await this.problemRepository.createProblem(problemData);
            console.log("Problem Created", problem);

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
}

module.exports = ProblemService;