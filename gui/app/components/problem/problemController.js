angular.module("eulernodeFrontend").controller("ProblemController", function($stateParams, $scope, ProblemService) {
    
    var ipc = require("electron").ipcRenderer;

    $scope.problem = ProblemService.getProblemById($stateParams.problemId);
    ipc.send("getProblemHtml",$scope.problem);

    $scope.runSolution = function(solutionId) {
        ipc.send("runProblemSolution",$scope.problem.id,solutionId);
    }

	ipc.on("problemSolution", function(event, result) {
		$scope.$apply(function() {
			$scope.problemSolution = result;
		});
	});
	
	ipc.on("problemHtml", function(event, html) {
		var problemDiv = angular.element(document.getElementById("problem_content"));
		problemDiv.empty();
		$scope.$apply(function() {
			problemDiv.append(html);
		});
	});
	
	$scope.$on("$destroy", function() {
		ipc.removeAllListeners("problemSolution");
	});
});
