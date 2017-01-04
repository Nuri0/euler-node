var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(30,"Digit fifth powers");

problem.addSolution(function() {
	// precompute the fifth digit powers
	var powers = [];
	for (var i=0; i<=9; i++) {
		powers[i] = Math.pow(i,5);
	}
	
	var sum = 0;
	for (var i=10; i<500000; i++) {
		var string = ""+i;
		var powerSum = 0;
		for (var j=0; j<string.length; j++) {
			powerSum += powers[string[j]];
		}
		
		if (powerSum == i) {
			sum += i;
		}
		
		
	}
	
	return sum;
	
});
module.exports = problem;
