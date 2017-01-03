var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(34);

var factorials = [];

problem.addSolution(function() {
	
	// precalculate factorials
	factorials[0] = 1;
	for (var i=1; i<10; i++) {
		factorials[i] = factorials[i-1] * i;
	}
	
	var sum = 0;
	for (var i=11; i<1000000; i++) {
		if (getDigitFactorialSum(i) == i)
			sum += i;
	}
	
	return sum;
});

var getDigitFactorialSum = function(number) {
	var string = "" + number;
	
	var sum = 0;
	for (var i=0; i<string.length; i++) {
		sum += factorials[string[i]];
	}
	return sum;
}

module.exports = problem;
