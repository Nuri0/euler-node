var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(31);

var amount = 200;

problem.addSolution(function() {
	return countCoinVariations(0,0,0,0,0,0,0,0,amount,[]);
});

var countCoinVariations = function(p1,p2,p5,p10,p20,p50,p100,p200,rest,hash) {
	var count = 0;
	var string = p1 + "-" + p2 + "-" + p5 + "-" + p10 + "-" + p20 + "-" + p50 + "-" + p100 + "-" + p200;
	if (!hash[string]) {
		// coin variation hasn't been used yet
		hash[string] = true;
	} else {
		// coin variation has already been used (and thus been tested further)
		return 0;
	}
	
	if (rest == 0) {
		return 1;
	}
	
	if (rest >= 200) {
		count += countCoinVariations(p1,p2,p5,p10,p20,p50,p100,p200+1,rest-200,hash);
	}
	
	if (rest >= 100) {
		count += countCoinVariations(p1,p2,p5,p10,p20,p50,p100+1,p200,rest-100,hash);
	}
	
	if (rest >= 50) {
		count += countCoinVariations(p1,p2,p5,p10,p20,p50+1,p100,p200,rest-50,hash);
	}
	
	if (rest >= 20) {
		count += countCoinVariations(p1,p2,p5,p10,p20+1,p50,p100,p200,rest-20,hash);
	}
	
	if (rest >= 10) {
		count += countCoinVariations(p1,p2,p5,p10+1,p20,p50,p100,p200,rest-10,hash);
	}
	
	if (rest >= 5) {
		count += countCoinVariations(p1,p2,p5+1,p10,p20,p50,p100,p200,rest-5,hash);
	}
	
	if (rest >= 2) {
		count += countCoinVariations(p1,p2+1,p5,p10,p20,p50,p100,p200,rest-2,hash);
	}
	
	if (rest >= 1) {
		count += countCoinVariations(p1+1,p2,p5,p10,p20,p50,p100,p200,rest-1,hash);
	}
	
	return count;	
	
}

module.exports = problem;
