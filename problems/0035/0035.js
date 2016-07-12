var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(35);
var primes = require("../../common/primes");

problem.addSolution(function() {
	
	var count = 1; // already counting the prime '2';
	
	for (var i=3; i<1000000; i+=2) {
		if (primes.isPrime(i)) {
			// 'i' is prime, now lets rotate some digits
			var number = ""+i;
			var isCircular = true;
			for (var j=0; j<number.length-1; j++) {
				number = number.substr(1) + number[0];
				if (!primes.isPrime(Number(number))) {
					isCircular = false;
					break;
				}
			}
			
			if (isCircular) {
				count++;
			}
		}
	}
	
	return count;
});

module.exports = problem;
