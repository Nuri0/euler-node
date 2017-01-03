var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(23);

var utils = require("../../common/utils");

problem.addSolution(function() {
	
	var abudant = getAbudants();
	var sum = 0;
	next: for (var i=1; i<28123; i++) {
		ab: for (var j=0; j < abudant.numbers.length; j++) {
			if (abudant.numbers[j] > i)
				continue ab;
			
			if (abudant.fastCheck[i - abudant.numbers[j]])
				continue next;
		}
		sum += i;
	}
	
	return sum;
});

var getAbudants = function() {
	var abudant = {
		numbers: [],
		fastCheck: []
	}
	
	for (var i=12; i<28123; i++) {
		if (utils.sumOfProperDivisors(i) > i) {
			abudant.numbers.push(i);
			abudant.fastCheck[i] = true;
		}
	}
	
	return abudant;	
}

module.exports = problem;
