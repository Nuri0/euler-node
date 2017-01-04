var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(9,"Special Pythagorean triplet");

var s = 1000;

// Code from the official solution
problem.addSolution(function() {
    for (var a = 3; a<= (s-3)/3; a++) {
        for (var b = (a+1); b <= (s-1-a)/2; b++) {
            var c = s-a-b;
            if (c*c == a*a + b*b) {
                return a*b*c;
            }
        }
    }
});
module.exports = problem;