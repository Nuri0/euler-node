var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(39);

problem.addSolution(function() {
	
	var solutions = [];
	for (var i=0; i<=1000; i++) {
		solutions[i] = 0;
	}
	var bBorder;
	
	for (var a=1; a < 1000; a++) {
		bBorder = (1000*(a-500))/(a-1000);
		for(var b=a; b <= bBorder; b++) {
			var c = Math.sqrt(a*a + b*b);
			
			if (isInt(c)) {
				if (a+b+c <= 1000) {
					solutions[a+b+c]++;
				}
			}
		}
	}
	
	var max = -1;
	var maxP = 0;
	
	for (var i=1; i<=1000; i++) {
		if (max < solutions[i]) {
			max = solutions[i];
			maxP = i;
		}
	}
	
	return maxP;
});

var isInt = function(number) {
	return number % 1 === 0;
}

module.exports = problem;
