var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(43,"Sub-string divisibility");
var PandigitalIterator = require("../../common/pandigitalIterator");

problem.addSolution(function() {
	
	var iterator = new PandigitalIterator(0,9,true);
	var sum = 0;
	var number;
	
	while ((number = iterator.next()) != "0123456789") {
		if (checkDivisibility(number)) {
			sum += parseInt(number);
		}
	}
	
	return sum;
});

function checkDivisibility(number) {
	// d2d3d4 divisible by 2
	if (parseInt(number[3])%2 != 0) {
		return false;
	}
	// d3d4d5 divisible by 3
	if ((parseInt(number[2]) + parseInt(number[3]) + parseInt(number[4]))%3 != 0) {
		return false;
	}
	// d4d5d6 divisible by 5
	if (number[5] != '5') {
		return false;
	}
	// d5d6d7 divisible by 7
	if (parseInt(number.substring(4,7))%7 != 0) {
		return false;
	}
	// d6d7d8 divisible by 11
	if (parseInt(number.substring(5,8)) % 11 != 0) {
		return false;
	}
	// d7d8d9 divisible by 13
	if (parseInt(number.substring(6,9))%13 != 0) {
		return false;
	}
	// d8d9d10 divisible by 17	
	if (parseInt(number.substring(7,10))%17 != 0) {
		return false;
	}
	return true;
}

module.exports = problem;