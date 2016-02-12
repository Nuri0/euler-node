var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(15);

var gridSize = 20;

problem.addSolution(function() {
	// clever solution using combinatorics
	var value = 1;
	for (i=1; i<= gridSize; i++) {
		value *= (gridSize*2 + 1 - i) / i;
	}
	return value;
});

module.exports = problem;
