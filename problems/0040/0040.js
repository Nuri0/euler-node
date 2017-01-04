var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(40,"Champernowne's constant");

var positions = [1,10,100,1000,10000,100000,1000000];

problem.addSolution(function() {
	var result = 1;
	var cnLength = 0; // == champernowneLength
	var number = 1;
	var positionCounter = 0;
	
	while(positionCounter < positions.length) {
		var numberString = "" + number;
		var numberLength = numberString.length;
		
		// is the wanted position inside the next number?
		if (cnLength + numberLength >= positions[positionCounter]) {
			var rest = positions[positionCounter] - cnLength;
			// multiply the position to the result
			result *= Number(numberString[rest-1]);
			positionCounter++;
		}
		
		// add the length of the current number
		cnLength += numberLength;
		number++;
	}
	
	return result;
});

module.exports = problem;
