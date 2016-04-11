var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(20);

var BigInteger = require("biginteger");

problem.addSolution(function() {
    
    var number = BigInteger.BigInteger(1);
    
    for (var i=2; i<=100; i++) {
        number = number.multiply(i);
    }
    
    var count = 0;
    var string = number.toString();
    for (var i=0; i<string.length; i++) {
        count += Number(string[i]);
    }
    
    return count;
});

module.exports = problem;
