var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(28);

problem.addSolution(function() {
    var sum = 1;
    for (var i=3; i<= 1001; i+=2) {
        // n*n + (n*n - n + 1) + (n*n - 2*n + 2) + (n*n - 3*n + 3)
        // formulas for the corners of a square
        sum += (4*i*i - 6*i + 6);
    }
    return sum;
});


module.exports = problem;
