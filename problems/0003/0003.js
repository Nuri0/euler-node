var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(3,"Largest prime factor");

var Big = require("bignumber.js");

problem.addSolution(function() {
    var lastFactor;
    var number = new Big(600851475143);
    var factor = 2;
    while (number > 1) {
        if (number.mod(factor) == 0) {
            lastFactor = factor;
            number = number.div(factor);
        }
        factor++;
    }
    
    return lastFactor;
});

module.exports = problem;