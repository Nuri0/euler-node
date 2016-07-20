var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(38);

var utils = require("../../common/utils");

problem.addSolution(function() {
	var maxSum = -1;
	
	var string = "";
	
	for (var n=9; n>1; n--) {
		var d = 1;
		
		do {
			s = "";
			for (var i=1; i<=n; i++) {
				s += "" + (i*d);
			}
			if (utils.isPandigital(s)) {
				maxSum = Math.max(maxSum, Number(s));
			}
			d++;
		} while (s.length < 10);
	}
	
	return maxSum;
});

module.exports = problem;
