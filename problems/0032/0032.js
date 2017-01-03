var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(32);

problem.addSolution(function() {
	/*
	 * a and b length of multiplicand and multiplier
	 * on multiplying to product of length c: (a+b-1) <= c <= (a+b)     -> f = {-1,0}
	 * a+b+c = 9
	 * 
	 * a+b+(a+b+f) = 9
	 * 2a+2b = 9-f
	 * a+b = (9-f)/2
	 * 4,5 <= a+b <= 5
	 * 
	 * => b = 5-a
	 * 
	 */
	
	var sum = 0;
	var hash = [];
	for (var a=1; a<10000; a++) {
		var aLength = (""+a).length;
		var bLength = 5 - aLength;
		for (var b=1; b < Math.pow(10,bLength); b++) {
			var c = a*b;
			if (isPandigital(a,b,c)) {
				if (!hash[c]) {
					hash[c] =  true;
					sum += c;
				}
			}
		}
	}
	return sum;
});

var isPandigital = function(multiplicand, multiplier, product) {
	var result = "" + multiplicand + "" + multiplier + "" + product;
	
	if (result.length != 9)
		return false;
	
	
	for (var i=1; i<=9; i++) {
		if (result.indexOf("" + i) == -1)
			return false;
	}
	
	return true;
}

module.exports = problem;
