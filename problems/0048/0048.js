var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(48,"Self powers");
var utils = require("../../common/utils");

problem.addSolution(function() {
    var powers = 1000;
    var result = [0,0,0,0,0,0,0,0,0,0];
    var carry = 0;

    for (var i=1; i<=powers; i++) {
        var digits = [0,0,0,0,0,0,0,0,0,1];

        for (var j=0; j<i; j++) { // multiply 1 with i exactly i-times
            carry = 0;
            for (var k=digits.length-1; k>=0; k--) {
                digits[k] = digits[k]*i + carry;
                if (digits[k] > 9) {
                    carry = Math.floor(digits[k]/10);
                    digits[k] = digits[k]%10;
                } else {
                    carry = 0;
                }
            }
        }

        // add self power to result
        carry = 0;
        for (var j=result.length-1 ; j>=0 ; j--) {
            result[j] += digits[j] + carry;
            if (result[j] > 9) {
                carry = 1;
                result[j] -= 10;
            } else {
                carry = 0;
            }
        }

    }
	
	return result.join("");
});

module.exports = problem;
