var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(25);

var big = require("biginteger");

problem.addSolution(function() {
	var current = big.BigInteger(1);
	var prev = big.BigInteger(1);
	var n = 2;
	var swap;
	
	while (current.toString().length < 1000) {
		swap = current.add(prev);
		prev = current;
		current = swap;
		n++;
	}
	
	return n;
});

module.exports = problem;
