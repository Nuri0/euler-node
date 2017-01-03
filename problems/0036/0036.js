var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(36);

problem.addSolution(function() {
	
	var sum = 0;
	for (var i=0; i<1000000; i++) {
		if (isPalindromic(""+i)) {
			if (isPalindromic(i.toString(2))) {
				sum += i;
			}
		}
	}
	
	return sum;
});

var isPalindromic = function(string) {
	var length = string.length;
	for (var i=0; i<length/2; i++) {
		if (string[i] != string[length-1-i]) {
			return false;
		}
	}
	
	return true;
}

module.exports = problem;
