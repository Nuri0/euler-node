var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(6);

var limit = 100;

// "Brute Force"
problem.addSolution(function() {
    var sum = 0;
    var qsum = 0;
    for (var i=1; i<=limit; i++) {
        sum += i;
        qsum += i * i;
    }
    
    return (sum * sum) - qsum;
});

// "Clever solution"
problem.addSolution(function() {
    var sum = limit * (limit + 1) / 2;
    var qsum = (2 * limit + 1) * (limit + 1) * limit / 6;
    return (sum * sum) - qsum;
})

module.exports = problem;