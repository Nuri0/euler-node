var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(24);

problem.addSolution(function() {
	var permutation = 999999;
	var numbers = 10; // 0,1,2,3,4,5,6,7,8,9 -> {0, ... , numbers-1}
	var result = "";
	
	var digits = [];
	for (var i=0; i<numbers; i++) {
		digits.push(i + "");
	}
	
	for (var i = numbers - 1; i >= 0; i--) {
		var perms = factorial(i);
		var permCount = Math.floor(permutation/perms);
		result += digits.splice(permCount,1)[0];
		permutation -= perms * permCount;
	}
	
	return result;
});

var factorial = function(n) {
	if (n < 0)
		return -1;
	if (n == 0)
		return 1;
	
	return n*factorial(n-1);
}

module.exports = problem;
