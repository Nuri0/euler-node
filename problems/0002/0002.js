var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(2,"Even Fibonacci numbers");

problem.addSolution(function() {
    var fib1 = 1;
    var fib2 = 2;
    var sum = 2;
    while (fib2 < 4000000) {
        var newFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = newFib;
        if (newFib % 2 == 0) {
            sum += newFib;
        }
    }
    
    return sum;
});

module.exports = problem;