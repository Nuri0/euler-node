var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(33);

problem.addSolution(function() {
	
	var prodNum = 1;
	var prodDen = 1;
	
	for (var numerator = 11; numerator <= 99; numerator++) {
		for (var denominator = numerator+1; denominator <= 99; denominator++) {
			// skip if any of the numbers contain a trailing zero
			if ((numerator % 10 == 0) || (denominator % 10 == 0)) {
				continue;
			}
			
			if (canBeCanceledByDigit(numerator, denominator)) {
				prodNum *= numerator;
				prodDen *= denominator;
			}
		}
	}
	
	var g = gcm(prodNum, prodDen);
	
	return prodDen/g;
});

var gcm = function(n,d) {
	return d == 0 ? n : gcm(d,n%d);
}

var canBeCanceledByDigit = function(num, den) {
	var digits = ["1","2","3","4","5","6","7","8","9"];
	
	var sn = "" + num;
	var sd = "" + den;
	
	for (var i=0; i<digits.length; i++) {
		if (sn.indexOf(digits[i]) == -1 || sd.indexOf(digits[i]) == -1) {
			continue;
		}
		
		sn = sn.replace(digits[i],"");
		sd = sd.replace(digits[i],"");
		
		// check, if we deleted two character
		if (sn.length == 0)
			sn = "" + digits[i];
		if (sd.length == 0)
			sd = "" + digits[i];
		
		var nNew = Number(sn);
		var dNew = Number(sd);
		
		if (num*dNew == den*nNew) {
			return true;
		}
	}
	
	return false;
}

module.exports = problem;
