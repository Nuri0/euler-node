var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(16);

var power = 1000;

problem.addSolution(function() {
    // save each digits of the resulting number in an own array entry and multiply each digits for its own
    
    var maxDigits = power * 0.35; // just some estimation based on http://math.stackexchange.com/questions/177973/is-there-a-way-to-determine-how-many-digits-a-power-of-2-will-contain
    var digits = [1];
    var maxPosition = 0;
    var erg, carry = 0;
    for (var i=1; i<=power; i++) {
        for (var j=0; j<=maxPosition; j++) {
            erg = (digits[j] * 2 + carry) || carry;
            digits[j] = erg % 10;
            
            if (erg >= 10) {
                carry = 1;
                if (j == maxPosition) {
                    maxPosition++;
                }
            } else {
                carry = 0;
            }
        }
    }
    
    var count = 0;
    for (var i=0; i<=maxPosition; i++) {
        count += digits[i];
    }
    
    return count;
});

module.exports = problem;
