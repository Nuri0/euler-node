var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(18,"Maximum path sum I");

var fs = require("fs");
var path = require("path");
var baseGrid = [];
var init = function() {
    var lines = fs.readFileSync(path.join(__dirname,"0018.txt"),"utf-8").split("\n");
    for (var i=0; i<lines.length; i++) {
        baseGrid[i] = [];
        var numbers = lines[i].split(" ");
        for (var j=0; j<numbers.length; j++) {
            baseGrid[i][j] = Number(numbers[j]);
        }
    }
}
init();

problem.addSolution(function() {
    // This is a clever solution, which can also be recycled for problem 67
    
    var grid = JSON.parse(JSON.stringify(baseGrid));
    
    // start with the second to last row and go up
    for (var i=grid.length-2; i>=0; i--) {
        for (var j=0; j<grid[i].length; j++) {
            // check if for a cell it would better to go left or right and update the current cell
            grid[i][j] = Math.max(grid[i][j] + grid[i+1][j], grid[i][j] + grid[i+1][j+1]);
        }
        
    }
    
    return grid[0][0];
});

module.exports = problem;
