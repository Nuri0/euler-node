var sumOfDivisors = function(n) {
	var sum = 1;
	var p = 2;
	
	while((p*p <= n) && (n > 1)) {
		if ((n % p) == 0) {
			var j = p*p;
			n /= p;
			while((n % p) == 0) {
				j *= p;
				n /= p;
			}
			sum *= (j-1);
			sum /= (p-1);
		}
		if (p==2) {
			p = 3;
		} else {
			p += 2;
		}
	}
	
	if (n > 1) {
		sum *= (n+1);
	}
	
	return sum;
}

var isNPandigital = function(number, n) {
	var string = "" + number;
	for (var i=1; i<=n; i++) {
		if (string.indexOf("" + i) == -1) {
			return false;
		}
	}
	
	return true;
}

module.exports = {
	sumOfDivisors: sumOfDivisors,
	sumOfProperDivisors: function(n) {
		return sumOfDivisors(n) - n;
	},
	isNPandigital: isNPandigital,
	isPandigital: function(number) {
		return isNPandigital(number,9);
	},
	triangleNumber: function(n) {
		return (n/2)*(n+1);
	},
	pentagonalNumber: function(n) {
		return (n/2)*(3*n-1);
	},
	hexagonalNumber: function(n) {
		return n*(2*n-1);
	}
}
