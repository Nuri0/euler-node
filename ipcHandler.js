var fs = require("fs");
var path = require("path");

function setup(ipcMain) {
    // TODO implement

    ipcMain.on("ping", (event, arg) => {
        console.log(event);
        event.sender.send("pong");
    })

    ipcMain.on("getListOfSolvedProblems", (event, arg) => {
        var problemDir = fs.readdirSync(path.join(__dirname,"problems"));

        var problems = [];
        problemDir.forEach(function(value) {
            var problemPath = path.join(__dirname,"problems",value,value+".js");
            if (fs.existsSync(problemPath)) {
                problems.push(require(problemPath));
            }
        });

        event.sender.send("listOfSolvedProblems",problems);

    });

    ipcMain.on("runProblemSolution", (event, problemId, solutionId) => {

        var problemString = ("0000" + problemId).substr(-4,4);
        var problemPath = "./problems/" + problemString + "/" + problemString;
        var problem = require(problemPath);
        var result = problem.getSolutions()[solutionId]();

        event.sender.send("getProblemSolution",result);
    });
}

module.exports = setup;