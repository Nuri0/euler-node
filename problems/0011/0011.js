var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(11);

problem.setInputFile("0011.txt");

var fs = require("fs");
var path = require("path");
var grid;
var init = function() {
    grid = [];
    var lines = fs.readFileSync(path.join(__dirname,"0011.txt"),"utf-8").split("\n");
    for (var i=0; i<lines.length; i++) {
        grid.push(new Array());
        var lineNumbers = lines[i].split(" ");
        for (var j=0; j<lineNumbers.length; j++) {
            grid[i].push(parseInt(lineNumbers[j]));
        }
    }
};
init();

problem.addSolution(function() {
    var max = 0;
    
    for (var i=0; i<grid.length; i++) {
        for (var j=0; j<grid[0].length; j++) {
            
            // vertical test
            if (i <= grid.length-4) {
                
                max = Math.max(max,grid[i][j]*grid[i+1][j]*grid[i+2][j]*grid[i+3][j]);
            }
            
            // horizontal test
            if (j <= grid[0].length-4) {
                max = Math.max(max,grid[i][j]*grid[i][j+1]*grid[i][j+2]*grid[i][j+3]);
            }
            
            // diagonal test (up left to down right)
            if (i <= grid.length-4 && j <= grid[0].length-4) {
                max = Math.max(max,grid[i][j]*grid[i+1][j+1]*grid[i+2][j+2]*grid[i+3][j+3]);
            }
            
            // diagonal test (up right to down left)
            if (i <= grid.length-4 && j >= 3) {
                max = Math.max(max,grid[i][j]*grid[i+1][j-1]*grid[i+2][j-2]*grid[i+3][j-3]);
            }
        }
    }
    
    return max;
});

module.exports = problem;