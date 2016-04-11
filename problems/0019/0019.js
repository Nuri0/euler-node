var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(19);

problem.addSolution(function() {
    
    var count = 0;
    
    for (var year = 1901; year <= 2000; year++) {
        for (var month = 0; month < 12; month++) {
            if (new Date(year, month, 1).getDay() == 0) {
                count++;
            }
        }
    }
    
    return count;
});

module.exports = problem;
