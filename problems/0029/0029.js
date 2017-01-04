var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(29,"Distinct powers");
var big = require("biginteger");

problem.addSolution(function() {
    var powers = [];
    var count = 0;
    
    for (var a = 2; a <= 100; a++) {
        for (var b = 2; b <= 100; b++) {
            var value = big.BigInteger(a).pow(b);
            if (!powers[value]) {
                powers[value] = true;
                count++;
            }
        }
    }
    
    return count;
});


module.exports = problem;
