var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(21);

problem.addSolution(function() {
	var numbers = [];
	for (var i=1; i<10000; i++) {
		numbers[i] = sumOfProperDivisors(i);
	}
	
	var sum = 0;
	for (var i=0; i<10000; i++) {
		var sopd = numbers[i];
		if (numbers[sopd] == i && i != sopd) {
			sum += i;
			console.log(i + " - " + sopd);
		}
	}
	
	return sum;
});

var sumOfProperDivisors = function(number) {
	var sum = 1; // Skip the "1" in the for-loop, as we don't want to add number/1
	for (var i=2; i<=Math.sqrt(number); i++) {
		if (number % i == 0) {
			sum += i;
			if (number != i*i) {
				sum += (number/i);
			}
		}
	}
	return sum;
}

module.exports = problem;
