var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(1);

var sumDivisibleBy = function(goal, divisor) {
    var dividentCount = Math.floor(goal / divisor);
    return Math.floor(divisor * (dividentCount * (dividentCount + 1) / 2));
};

// Clever solution
problem.addSolution(function() {
    return sumDivisibleBy(999,3) + sumDivisibleBy(999,5) - sumDivisibleBy(999,15);
});

// brute force solution
problem.addSolution(function() {
    var sum = 0;
    for (var i=1; i<1000; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    return sum;
});

module.exports = problem;