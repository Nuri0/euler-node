var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(5);

problem.addSolution(function() {
    
    var number = 20;
    var found = false;
    
    // not all factors are need as e.g. 6 = 2*3
    var factors = [2,3,4,5,7,9,11,13,16,17,19];
    while (!found) {
        
        number += 20;
        found = true;
        
        for (var i=0; i<factors.length; i++) {
            // if number cannot be divided by factor, cancel this round and try next number
            if (number % factors[i] != 0) {
                found = false;
                break;
            }
        }
    }
    
    return number;
});

module.exports = problem;