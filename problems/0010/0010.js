var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(10);

var limit = 2000000;

// official optimised solution
problem.addSolution(function() {
    var sieveBound = (limit - 1) / 2;
    var sieve = [];
    for (var i=1; i<sieveBound; i++) {
        sieve.push(false);
    }
    
    var crosslimit = (Math.floor(Math.sqrt(limit)) - 1) / 2;
    
    for (var i=1; i<crosslimit; i++) {
        if (!sieve[i]) {
            for (var j=2*i*(i+1); j<sieveBound; j += 2*i+1) {
                sieve[j] = true;
            }
        }
    }
    
    var sum = 2;
    
    for (i=1; i<sieveBound; i++) {
        if (!sieve[i]) {
            sum += (2*i+1);
        }
    }
    
    return sum;
});
module.exports = problem;