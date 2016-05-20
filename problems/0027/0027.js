var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(27);
var primes = require("../../common/primes");

problem.addSolution(function() {
    var maxA = 0, maxB = 0;
    var maxSeq = -1;
    
    for (var a = 999; a > -1000; a--) {
        for (var b = 999; b > -1000; b--) {
            var n = 0;
            
            while (primes.isPrime((n*n) + (a*n) + b)) {
                n++;
            }
            
            if (n > maxSeq) {
                maxA = a;
                maxB = b;
                maxSeq = n;
            }
        }
    }
    
    return maxA * maxB;
});


module.exports = problem;
