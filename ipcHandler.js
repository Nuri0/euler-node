var fs = require("fs");
var path = require("path");
var isOnline = require("is-online");
var https = require("https");
var cheerio = require("cheerio");

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

        event.sender.send("problemSolution",result);
    });
    
    ipcMain.on("getProblemHtml", (event, problemId) => {

		isOnline().then(online => {
			if (online) {
				
				https.get("https://projecteuler.net/problem=255", function(res) {
					var data = "";
					res.on("data", function(chunk) {
						data += chunk;
					});
					res.on("end", function() {
						var $ = cheerio.load(data);

						// adapt the urls for the images
						var	images = $(".problem_content img");
						images.attr("src", function(i, id) {
							return path.join("https://projecteuler.net/",id);
						});
						
						event.sender.send("problemHtml",$(".problem_content").html());
					});
				});
				
			}
		});
		
	});
}

module.exports = setup;