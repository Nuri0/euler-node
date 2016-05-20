module.exports = {
    isPrime: function(n) {
        
        if (n < 1) {
            return false;
        }
        
        if (n == 1) {
            return false;
        }
        
        // 2 and 3 are prime
        if (n < 4) {
            return true;
        }
        
        // even numbers are no primes
        if ((n % 2) == 0) {
            return false;
        }
        
        // 4,6 and 8 have already been excluded
        if (n < 9) {
            return true;
        }
        
        if ((n % 3) == 0){
            return false;
        }
        
        var r = Math.floor(Math.sqrt(n));
        var f = 5;
        while (f <= r) {
            if ((n % f) == 0) {
                return false;
            }
            
            if ((n % (f + 2)) == 0) {
                return false;
            }
            
            f += 6;
        }
        return true;
        
    }
}