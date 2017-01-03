var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(4);

var reverse = function(n) {
    var reversed = 0;
    while (n >= 1) {
        reversed = 10 * reversed + n % 10;
        n = Math.floor(n / 10);
    }
    return reversed;
};

var isPalindrom = function(n) {
    return n == reverse(n);
};

problem.addSolution(function() {
    largestPalindrom = 0;
    var a = 100;
    console.log(isPalindrom(1221));
    
    while (a <= 999) {
        var b = a;
        while (b <= 999) {
            if (isPalindrom(a*b) && a*b > largestPalindrom) {
                largestPalindrom = a*b;
            }
            b++;
        }
        a++;
    }
    
    return largestPalindrom;
});

module.exports = problem;