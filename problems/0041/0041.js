var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(41,"Pandigital Prime");
var PandigitalIterator = require("../../common/pandigitalIterator");
var primes = require("../../common/primes");
var utils = require("../../common/utils");

problem.addSolution(function() {
	var found = false;
	
	for (var i=9; i>1; i--) {
		var permutations = utils.permutation(i);
		var iterator = new PandigitalIterator(1,i,false);
		var number = iterator.getNumber();
		var count = 0;
		
		while (!found && (count < permutations)) {
			if (primes.isPrime(number)) {
				found = true;
			} else {
				number = iterator.previous();
			}
			count++;
		}
		
		if (found) {
			break;
		}
	}
	
	return number;
});

module.exports = problem;