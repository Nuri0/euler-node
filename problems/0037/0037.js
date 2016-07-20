var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(36);

var primes = require("../../common/primes");

problem.addSolution(function() {
	var number = 11;
	var count = 0;
	var sum = 0;
	
	while (count < 11) {
		if (primes.isPrime(number)) {
			if (isRightTruncatablePrime(number) && isLeftTruncatablePrime(number)) {
				sum += number;
				count++;
			}
		}
		
		number += 2;
	}
	
	return sum;
});

var isRightTruncatablePrime = function(number) {
	var string = "" + number;
	for (var i=string.length-1; i>0; i--) {
		var newNumber = Number(string.substr(0,i));
		
		if (!primes.isPrime(newNumber)) {
			return false;
		}
	}
	return true;
}

var isLeftTruncatablePrime = function(number) {
	var string = "" + number;
	for (var i=1; i<string.length; i++) {
		var newNumber = Number(string.substr(i));
		
		if (!primes.isPrime(newNumber)) {
			return false;
		}
	}
	return true;
}

module.exports = problem;
