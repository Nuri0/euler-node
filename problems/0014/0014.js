var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(14);

problem.addSolution(function() {
	// Brute force method (without cache)
	return getResult(false);
});

problem.addSolution(function() {
	return getResult(true);
});

var getResult = function(cached) {
	var longestChain = 0;
	var number = 0;
	var chain = 0;
	
	for (var i=2; i < 1000000; i++) {
		if (!cached) 
			chain = lengthOfCollatzSequence(i);
		else
			chain = cachedLengthOfCollatzSequence(i);
			
		if (chain > longestChain) {	
			longestChain = chain;
			number = i;
		}
	}
	return number;
};

var lengthOfCollatzSequence = function(n) {
	var length = 1;
	
	while (n !== 1) {
		if (n % 2 == 0) {
			n /= 2;
		} else {
			n = n * 3 + 1;
		}
		length++;
	}
	
	return length;
}

var cache = {};
cache[1] = 1; // end of each collatz sequence
var cachedLengthOfCollatzSequence = function(n) {
	if (!!cache[n]) {
		// value is already cached
		return cache[n];
	} else {
		// compute value
		var nextValue;
		if (n % 2 == 0) {
			nextValue = n / 2;
		} else {
			nextValue = 3 * n + 1;
		}
		cache[n] = 1 + cachedLengthOfCollatzSequence(nextValue);
		return cache[n];
	}
}

module.exports = problem;
