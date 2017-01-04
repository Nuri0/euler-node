var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(7,"10001st prime");

var primes = require("../../common/primes.js")

var limit = 10001;

problem.addSolution(function() {
    
    var count = 1;
    var number = 1;
    do {
        number += 2;
        if (primes.isPrime(number)) {
            count++;
        }
    } while (count != limit);
    
    return number;
});

module.exports = problem;