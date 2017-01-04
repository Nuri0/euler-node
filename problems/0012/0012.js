var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(12,"Highly divisible triangular number");

var divisorLimit = 500;

problem.addSolution(function() {
    // Brute force solution
    
    var i = 1;
    while (true) {
        var number = getNthTriangleNumber(i);
        //console.log(number);
        var divisorCount = 0;
        for (var j=0; j<Math.sqrt(number); j++) {
            if (number % j == 0) {
                divisorCount = divisorCount + 2;
            }
            
            if (divisorCount >= divisorLimit) {
                return number;
            }
        }
        i++;
    }
});

var getNthTriangleNumber = function(n) {
    return (n * (n + 1)) / 2;
}

module.exports = problem;