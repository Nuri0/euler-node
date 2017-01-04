var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(45,"Triangular, pentagonal, and hexagonal");
var utils = require("../../common/utils");

problem.addSolution(function() {
	
	var indexTri = 286;
	var indexPenta = 1, curPenta = utils.pentagonalNumber(indexPenta);
	var indexHexa = 1, curHexa = utils.hexagonalNumber(indexHexa);
	
	var found = false;
	var result;
	while(!found) {
		curTriangle = utils.triangleNumber(indexTri);
		
		while (curPenta < curTriangle) {
			indexPenta++;
			curPenta = utils.pentagonalNumber(indexPenta);
		}
		while (curHexa < curTriangle) {
			indexHexa++;
			curHexa = utils.hexagonalNumber(indexHexa);
		}
		
		if ((curTriangle == curPenta) && (curTriangle == curHexa)) {
			found = true;
			result = curTriangle;
		} else {
			indexTri++;
		}
	}
	
	return result;
});

module.exports = problem;
